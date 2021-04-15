import React, { useReducer, useCallback } from 'react';
import {
  AUTHENTICATION_LOGIN,
  AUTHENTICATION_LOGOUT,
  LOGIN_ERROR,
} from '../types';
import { setMyCookie, removeMyCookie, getMyCookie } from '../../util/loginUtil';
import AuthenticationContext from './authenticationContext';
import authenticationReducer from './authenticationReducer';

const AuthenticationState = ({ children }) => {
  const initialState = {
    cookie: null,
    isAuthenticated: false,
    isLoading: true,
    authenticationError: null,
  };

  const [state, dispatch] = useReducer(authenticationReducer, initialState);

  const restRoot =
    'https://headless-rest.guqlibrary.georgetown.domains/wp-json';

  const login = useCallback(
    async ({ username, password }) => {
      let loginUrl = `${restRoot}/jwt-auth/v1/token`;

      try {
        const response = await fetch(loginUrl, {
          method: 'POST',
          body: JSON.stringify({
            username,
            password,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          // login error
          const error = await response.json();
          dispatch({ type: LOGIN_ERROR, payload: error });
        } else {
          // login success
          const user = await response.json();
          const token = await user.token;

          if (token) {
            // set cookie with token value
            setMyCookie(token);

            dispatch({
              type: AUTHENTICATION_LOGIN,
              payload: token,
            });
          }
        }
      } catch (error) {
        console.log('Token Error', error);
      }
    },
    [dispatch]
  );

  const logout = useCallback(() => {
    removeMyCookie();

    dispatch({ type: AUTHENTICATION_LOGOUT });
  }, [dispatch]);

  const checkCookie = useCallback(() => {
    const myCookie = getMyCookie();

    if (myCookie) {
      dispatch({ type: AUTHENTICATION_LOGIN, payload: myCookie });
    } else {
      dispatch({ type: AUTHENTICATION_LOGOUT });
    }
  }, [dispatch]);

  return (
    <AuthenticationContext.Provider
      value={{
        cookie: state.cookie,
        isAuthenticated: state.isAuthenticated,
        isLoading: state.isLoading,
        authenticationError: state.authenticationError,
        login,
        logout,
        checkCookie,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationState;
