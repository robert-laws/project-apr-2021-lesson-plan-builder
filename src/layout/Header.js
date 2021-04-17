import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/images/logo-3.svg';
import Navigation from './Navigation';
import Logout from '../components/auth/Logout';
import AuthenticationContext from '../context/authentication/authenticationContext';

const Header = () => {
  const authenticationContext = useContext(AuthenticationContext);
  const { isAuthenticated } = authenticationContext;

  return (
    <header className='text-gray-700 bg-blue-700 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <NavLink
          exact
          to='/'
          className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
        >
          <Logo className='w-12 h-12 p-2 bg-blue-400 rounded-full' />
          <span className='ml-3 text-lg text-white'>LessonBuilder</span>
        </NavLink>
        <Navigation />

        {isAuthenticated && <Logout />}
        {!isAuthenticated && (
          <NavLink
            to='/login'
            className='inline-flex items-center bg-gray-200 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 hover:text-white rounded text-base mt-4 md:mt-0'
          >
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
