import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-100	flex flex-wrap items-center text-base justify-center'>
      <NavLink
        to='/lists'
        className='mr-5 text-white hover:text-blue-100 cursor-pointer'
      >
        Lessons List
      </NavLink>
      <NavLink
        to='/new'
        className='mr-5 text-white hover:text-blue-100 cursor-pointer'
      >
        New Lesson
      </NavLink>
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
