import React from 'react';
import Heading from '../components/ui/Heading';

const NotFound = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='px-28 pt-14 pb-16 border border-gray-600 rounded-md'>
        <Heading size='h1'>Page Not Found</Heading>
      </div>
    </div>
  );
};

export default NotFound;
