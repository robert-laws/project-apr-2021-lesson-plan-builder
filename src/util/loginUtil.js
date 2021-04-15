import Cookies from 'js-cookie';

// cookie utilities
export const setMyCookie = (token) => {
  Cookies.set('user_cookie', token);
};

export const removeMyCookie = () => {
  Cookies.remove('user_cookie', { path: '' });
};

export const getMyCookie = () => {
  const cookieValue = Cookies.get('user_cookie');
  return cookieValue;
};
