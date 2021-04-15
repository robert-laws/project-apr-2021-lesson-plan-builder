import React from 'react';

const Navigation = () => {
  return (
    <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-100	flex flex-wrap items-center text-base justify-center'>
      <a className='mr-5 text-white hover:text-blue-100 cursor-pointer'>
        Lessons List
      </a>
      <a className='mr-5 text-white hover:text-blue-100 cursor-pointer'>
        New Lesson
      </a>
      <a className='mr-5 text-white hover:text-blue-100 cursor-pointer'>
        About
      </a>
    </nav>
  );
};

export default Navigation;
