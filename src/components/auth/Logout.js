import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthenticationContext from '../../context/authentication/authenticationContext';

const Logout = () => {
  const authenticationContext = useContext(AuthenticationContext);
  const { logout } = authenticationContext;

  const history = useHistory();

  const logoutUser = async () => {
    logout();
    history.push('/');
  };

  return (
    <button
      className='inline-flex items-center bg-gray-200 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 hover:text-white rounded text-base mt-4 md:mt-0'
      onClick={logoutUser}
    >
      Logout
    </button>
  );
};

export default Logout;
