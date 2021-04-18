import React, { useReducer, useCallback } from 'react';
import {
  GET_INFORMATION_LITERACY_OBJECTIVES,
  GET_THRESHOLD_CONCEPTS,
  GET_MODULES,
  GET_LIBRARIANS,
  ADD_CUSTOM_MODULES,
  OPTIONS_ERROR,
} from '../types';
import OptionsContext from './optionsContext';
import optionsReducer from './optionsReducer';

const OptionsState = ({ children }) => {
  const initialState = {
    informationLiteracyObjectives: null,
    thresholdConcepts: null,
    modules: null,
    librarians: null,
    optionsError: null,
  };

  const [state, dispatch] = useReducer(optionsReducer, initialState);

  const restRoot =
    'https://headless-rest.guqlibrary.georgetown.domains/wp-json';

  const getInformationLiteracyObjectives = useCallback(async () => {
    let restURL = `${restRoot}/wp/v2/information_literacy_objectives?_fields=id,name&per_page=11`;

    try {
      const response = await fetch(restURL);
      const data = await response.json();

      if (data) {
        dispatch({ type: GET_INFORMATION_LITERACY_OBJECTIVES, payload: data });
      }
    } catch (error) {
      dispatch({ type: OPTIONS_ERROR, payload: error.message });
    }
  }, [dispatch]);

  const getThresholdConcepts = useCallback(async () => {
    let restURL = `${restRoot}/wp/v2/threshold_concepts?_fields=id,name`;

    try {
      const response = await fetch(restURL);
      const data = await response.json();

      if (data) {
        dispatch({ type: GET_THRESHOLD_CONCEPTS, payload: data });
      }
    } catch (error) {
      dispatch({ type: OPTIONS_ERROR, payload: error.message });
    }
  }, [dispatch]);

  const getModules = useCallback(async () => {
    let restURL = `${restRoot}/wp/v2/instruction_modules?_fields=id,title,acf&order=asc&per_page=15`;

    try {
      const response = await fetch(restURL);
      const data = await response.json();

      const modulesData = data.map((module) => ({
        id: module.id,
        name: module.title.rendered,
        acf: module.acf,
      }));

      if (data) {
        dispatch({ type: GET_MODULES, payload: modulesData });
      }
    } catch (error) {
      dispatch({ type: OPTIONS_ERROR, payload: error.message });
    }
  }, [dispatch]);

  const addCustomModule = useCallback(
    (newModule) => {
      dispatch({ type: ADD_CUSTOM_MODULES, payload: newModule });
    },
    [dispatch]
  );

  const getLibrarians = useCallback(async () => {
    let restURL = `${restRoot}/wp/v2/librarians?_fields=id,name`;

    try {
      const response = await fetch(restURL);
      const data = await response.json();

      if (data) {
        dispatch({ type: GET_LIBRARIANS, payload: data });
      }
    } catch (error) {
      dispatch({ type: OPTIONS_ERROR, payload: error.message });
    }
  }, [dispatch]);

  return (
    <OptionsContext.Provider
      value={{
        informationLiteracyObjectives: state.informationLiteracyObjectives,
        thresholdConcepts: state.thresholdConcepts,
        modules: state.modules,
        librarians: state.librarians,
        optionsError: state.optionsError,
        getInformationLiteracyObjectives,
        getThresholdConcepts,
        getModules,
        getLibrarians,
        addCustomModule,
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
};

export default OptionsState;
