import React from 'react';

const Heading = ({ size, children }) => {
  if (size === 'h1') {
    return (
      <h1 className='text-2xl font-bold text-gray-800 mt-4'>{children}</h1>
    );
  } else if (size === 'h2') {
    return <h2 className='text-xl font-bold text-gray-800 mt-4'>{children}</h2>;
  } else if (size === 'h3') {
    return (
      <h3 className='text-base font-bold text-gray-800 mt-4'>{children}</h3>
    );
  } else {
    return (
      <h1 className='text-2xl font-bold text-gray-800 mt-4'>{children}</h1>
    );
  }
};

export default Heading;
