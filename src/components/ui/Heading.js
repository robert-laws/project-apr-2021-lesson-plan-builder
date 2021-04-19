import React from 'react';

const Heading = ({ size, children }) => {
  if (size === 'h1') {
    return (
      <h1 className='text-2xl font-bold text-gray-800 mt-2'>{children}</h1>
    );
  } else if (size === 'h2') {
    return <h2 className='text-xl font-bold text-gray-800 mt-2'>{children}</h2>;
  } else {
    return (
      <h1 className='text-2xl font-bold text-gray-800 mt-2'>{children}</h1>
    );
  }
};

export default Heading;
