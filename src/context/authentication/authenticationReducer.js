import {
  AUTHENTICATION_LOGIN,
  AUTHENTICATION_LOGOUT,
  LOGIN_ERROR,
} from '../types';

const authenticationReducer = (state, action) => {
  switch (action.type) {
    case AUTHENTICATION_LOGIN: {
      return {
        ...state,
        cookie: action.payload,
        isAuthenticated: true,
        isLoading: false,
        authenticationError: null,
      };
    }

    case AUTHENTICATION_LOGOUT: {
      return {
        ...state,
        cookie: null,
        isAuthenticated: false,
        isLoading: false,
        authenticationError: null,
      };
    }

    case LOGIN_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default authenticationReducer;
