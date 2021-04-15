import React from 'react';

const Main = ({ children }) => {
  return (
    <main className='w-full container mx-auto flex-1 p-4'>{children}</main>
  );
};

export default Main;
