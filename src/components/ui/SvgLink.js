import React from 'react';
import { Link } from 'react-router-dom';

const SvgLink = ({ id, location, linkText }) => {
  return (
    <Link
      to={`/${location}/${id}`}
      className='mt-3 text-indigo-500 inline-flex items-center cursor-pointer'
    >
      {linkText}
      <svg
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        className='w-4 h-4 ml-2'
        viewBox='0 0 24 24'
      >
        <path d='M5 12h14M12 5l7 7-7 7'></path>
      </svg>
    </Link>
  );
};

export default SvgLink;
