import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/images/logo-3.svg';

const Footer = () => {
  return (
    <footer className='text-gray-600 body-font'>
      <div className='bg-gray-100'>
        <div className='container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col h-32'>
          <NavLink
            exact
            to='/'
            className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
          >
            <Logo className='w-8 h-8 p-1 bg-blue-400 rounded-full' />
            <span className='ml-3 text-base font-medium text-gray-800'>
              LessonBuilder
            </span>
          </NavLink>
          <div className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
            <p className='text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4'>
              © 2021 - LessonBuilder App
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
