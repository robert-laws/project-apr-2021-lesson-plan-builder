import React, { useEffect } from 'react';
import { useInput } from '../../hooks/useInput';
import Label from './Label';

const TextAreaInput = ({
  inputName,
  labelName,
  onInput,
  placeholder,
  initialValue,
}) => {
  const [value, onChange] = useInput(initialValue);

  useEffect(() => {
    onInput(inputName, value);
  }, [value, inputName, onInput]);

  return (
    <label className='block'>
      <Label>{labelName}</Label>
      <textarea
        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        rows='3'
        name={inputName}
        id={inputName}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
    </label>
  );
};

export default TextAreaInput;
