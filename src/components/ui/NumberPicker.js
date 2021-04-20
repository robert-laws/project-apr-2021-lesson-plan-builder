import React, { useEffect } from 'react';
import { useInput } from '../../hooks/useInput';
import AttentionText from './AttentionText';

const NumberPicker = ({
  inputName,
  onInput,
  placeholder,
  initialValue,
  required = false,
}) => {
  const [value, onChange] = useInput(initialValue);

  useEffect(() => {
    onInput(inputName, value);
  }, [value, inputName, onInput]);

  return (
    <label className='block'>
      <span className='text-gray-700'>{inputName.split('_').join(' ')}</span>
      {required && <AttentionText>* required</AttentionText>}
      <input
        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        type='number'
        id={inputName}
        name={inputName}
        min='1'
        max='50'
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></input>
    </label>
  );
};

export default NumberPicker;
