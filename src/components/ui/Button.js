import React from 'react';

const Button = ({
  handleClick,
  buttonType = 'button',
  buttonText = 'Click Me',
}) => {
  return (
    <div className='inline-flex rounded-md shadow'>
      <button
        onClick={handleClick}
        type={buttonType}
        className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
