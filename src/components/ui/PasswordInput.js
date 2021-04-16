import React, { useEffect } from 'react';
import { useInput } from '../../hooks/useInput';
import { useTouched } from '../../hooks/useTouched';
import { useValidation } from '../../hooks/useValidation';

const PasswordInput = ({ inputName, onInput, placeholder, initialValue }) => {
  const [value, onChange] = useInput(initialValue);
  const [touched, onBlur] = useTouched(false);
  const [error, errorText] = useValidation(value, touched);

  useEffect(() => {
    touched && !error
      ? onInput(inputName, value, error)
      : onInput(inputName, value, error);
  }, [value, inputName, error, touched, onInput]);

  return (
    <label className='block'>
      <label htmlFor={inputName} className='block font-normal text-gray-700'>
        {inputName.split('_').join(' ')}
      </label>
      <input
        type='password'
        className='mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50'
        name={inputName}
        id={inputName}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        autoComplete='off'
      />
      {error && <span className='text-xs text-red-500'>{errorText}</span>}
    </label>
  );
};

export default PasswordInput;
