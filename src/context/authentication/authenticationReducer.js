import {
  START_LOADING_CONTENT,
  AUTHENTICATION_LOGIN,
  AUTHENTICATION_LOGOUT,
  LOGIN_ERROR,
} from '../types';

const authenticationReducer = (state, action) => {
  switch (action.type) {
    case START_LOADING_CONTENT: {
      return {
        ...state,
        isUserLoading: true,
      };
    }

    case AUTHENTICATION_LOGIN: {
      return {
        ...state,
        cookie: action.payload,
        isAuthenticated: true,
        isLoading: false,
        isUserLoading: false,
        authenticationError: null,
      };
    }

    case AUTHENTICATION_LOGOUT: {
      return {
        ...state,
        cookie: null,
        isAuthenticated: false,
        isLoading: false,
        isUserLoading: false,
        authenticationError: null,
      };
    }

    case LOGIN_ERROR: {
      return {
        ...state,
        isLoading: false,
        isUserLoading: false,
        authenticationError: action.payload,
      };
    }

    default:
      return state;
  }
};

export default authenticationReducer;
