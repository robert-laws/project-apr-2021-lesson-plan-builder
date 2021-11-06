import React from 'react';

const Main = ({ children }) => {
  return (
    <main id='main-content' className='w-full flex-1'>
      {children}
    </main>
  );
};

export default Main;
