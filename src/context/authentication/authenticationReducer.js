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

    default:
      return state;
  }
};

export default authenticationReducer;
