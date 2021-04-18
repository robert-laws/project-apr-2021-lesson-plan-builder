import {
  GET_INFORMATION_LITERACY_OBJECTIVES,
  GET_THRESHOLD_CONCEPTS,
  GET_MODULES,
  GET_LIBRARIANS,
  ADD_CUSTOM_MODULES,
  OPTIONS_ERROR,
} from '../types';

const optionsReducer = (state, action) => {
  switch (action.type) {
    case GET_INFORMATION_LITERACY_OBJECTIVES: {
      return {
        ...state,
        informationLiteracyObjectives: action.payload,
        optionsError: null,
      };
    }

    case GET_THRESHOLD_CONCEPTS: {
      return {
        ...state,
        thresholdConcepts: action.payload,
        optionsError: null,
      };
    }

    case GET_MODULES: {
      return {
        ...state,
        modules: action.payload,
        optionsError: null,
      };
    }

    case ADD_CUSTOM_MODULES: {
      return {
        ...state,
        modules: [...state.modules, action.payload],
      };
    }

    case GET_LIBRARIANS: {
      return {
        ...state,
        librarians: action.payload,
        optionsError: null,
      };
    }

    case OPTIONS_ERROR: {
      return {
        ...state,
        optionsError: action.payload,
      };
    }

    default:
      return state;
  }
};

export default optionsReducer;
