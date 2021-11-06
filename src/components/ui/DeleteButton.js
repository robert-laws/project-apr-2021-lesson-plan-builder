import React from 'react';

const Button = ({
  id,
  buttonType = 'button',
  buttonText = 'Delete',
  handleClick,
  children,
}) => {
  return (
    <div className='inline-flex rounded-md'>
      <button
        name={id}
        onClick={handleClick}
        type={buttonType}
        className='inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 disabled:opacity-50 cursor-pointer disabled:cursor-default disabled:bg-gray-400'
      >
        {children}
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
