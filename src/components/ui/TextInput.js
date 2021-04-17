import React, { useEffect, useState } from 'react';
import { useInput } from '../../hooks/useInput';
// import { useTouched } from '../../hooks/useTouched';
// import { useValidation } from '../../hooks/useValidation';

const TextInput = ({
  inputName,
  onInput,
  placeholder,
  validate,
  initialValue,
}) => {
  const [value, onChange] = useInput(initialValue);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');

  // const [touched, onBlur] = useTouched(false);
  // const [error, errorText] = useValidation(value, validate);

  // useEffect(() => {
  //   touched && !error
  //     ? onInput(inputName, value, error)
  //     : onInput(inputName, value, error);
  // }, [value, inputName, error, touched, onInput]);

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

  useEffect(() => {
    onInput(inputName, value, error);
  }, [value, inputName, onInput, error]);

  return (
    <label className='block'>
      <label htmlFor={inputName} className='block font-normal text-gray-700'>
        {inputName.split('_').join(' ')}
      </label>
      <input
        type='text'
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

export default TextInput;
