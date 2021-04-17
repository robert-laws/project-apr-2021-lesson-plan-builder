import React, { useReducer, useCallback } from 'react';
import { BUILD_LESSON, GET_LESSONS, GET_LESSON } from '../types';
import LessonsContext from './lessonsContext';
import lessonsReducer from './lessonsReducer';

const LessonsState = ({ children }) => {
  const initialState = {
    lesson: null,
    lessons: null,
    isLoadingLessons: true,
  };

  const [state, dispatch] = useReducer(lessonsReducer, initialState);

  const restRoot =
    'https://headless-rest.guqlibrary.georgetown.domains/wp-json';

  const getLessons = useCallback(async () => {
    let restURL = `${restRoot}/wp/v2/lessons?_fields=id,title,acf,information_literacy_objectives,threshold_concepts,librarians&orderby=title&order=asc`;

    try {
      const response = await fetch(restURL);
      const allLessons = await response.json();

      if (allLessons) {
        dispatch({ type: GET_LESSONS, payload: allLessons });
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const getLesson = useCallback(
    (id) => {
      dispatch({ type: GET_LESSON, payload: id });
    },
    [dispatch]
  );

  const buildLesson = useCallback(
    (inputName, value) => {
      dispatch({ type: BUILD_LESSON, payload: { inputName, value } });
    },
    [dispatch]
  );

  return (
    <LessonsContext.Provider
      value={{
        lesson: state.lesson,
        lessons: state.lessons,
        isLoadingLessons: state.isLoadingLessons,
        getLessons,
        getLesson,
        buildLesson,
      }}
    >
      {children}
    </LessonsContext.Provider>
  );
};

export default LessonsState;
