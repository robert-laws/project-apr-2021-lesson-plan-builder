import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthenticationContext from '../context/authentication/authenticationContext';

const Navigation = () => {
  const authenticationContext = useContext(AuthenticationContext);
  const { isAuthenticated } = authenticationContext;

  return (
    <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-100	flex flex-wrap items-center text-base justify-center'>
      {isAuthenticated && (
        <NavLink
          to='/lists'
          className='mr-5 text-white hover:text-blue-100 cursor-pointer'
        >
          Lessons List
        </NavLink>
      )}
      {isAuthenticated && (
        <NavLink
          to='/new'
          className='mr-5 text-white hover:text-blue-100 cursor-pointer'
        >
          New Lesson
        </NavLink>
      )}
      <NavLink
        to='/about'
        className='mr-5 text-white hover:text-blue-100 cursor-pointer'
      >
        About
      </NavLink>
    </nav>
  );
};

export default Navigation;
