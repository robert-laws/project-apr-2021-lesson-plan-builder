import React, { useEffect } from 'react';
import { useInput } from '../../hooks/useInput';
import AttentionText from './AttentionText';
import Label from './Label';

const DatePicker = ({
  inputName,
  labelName,
  onInput,
  initialValue,
  required = false,
}) => {
  const [value, onChange] = useInput(initialValue);

  useEffect(() => {
    onInput(inputName, value);
  }, [value, inputName, onInput]);

  return (
    <label className='block'>
      <Label>{labelName}</Label>
      {required && <AttentionText>* required</AttentionText>}
      <input
        type='date'
        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        id={inputName}
        name={inputName}
        value={value}
        onChange={onChange}
        placeholder='mm/dd/yyyy'
      />
    </label>
  );
};

export default DatePicker;
