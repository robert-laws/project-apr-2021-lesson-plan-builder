import React, { useEffect, useState } from 'react';
import Label from './Label';
import { useInput } from '../../hooks/useInput';

const PasswordInput = ({
  inputName,
  labelName,
  onInput,
  placeholder,
  validate,
  initialValue,
}) => {
  const [value, onChange] = useInput(initialValue);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    onInput(inputName, value, error);
  }, [value, inputName, onInput, error]);

  useEffect(() => {
    if (validate) {
      if (value === '') {
        setErrorText('Please enter a value.');
        setError(true);
      } else if (value.length < 5) {
        setErrorText('Enter a value of at least 5 characters.');
        setError(true);
      } else {
        setErrorText('');
        setError(false);
      }
    }
  }, [validate, value]);

  return (
    <label className='block'>
      <Label>{labelName}</Label>
      <input
        type='password'
        className='mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50'
        name={inputName}
        id={inputName}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <span className='text-xs text-red-500'>{errorText}</span>}
    </label>
  );
};

export default PasswordInput;
