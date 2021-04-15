import Cookies from 'js-cookie';

// cookie utilities
export const setMyCookie = (token) => {
  Cookies.set('user_cookie', token);
};
