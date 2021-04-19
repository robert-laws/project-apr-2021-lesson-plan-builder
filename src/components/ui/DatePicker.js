import React, { useEffect } from 'react';
import { useInput } from '../../hooks/useInput';

const DatePicker = ({ inputName, onInput, initialValue }) => {
  const [value, onChange] = useInput(initialValue);

  useEffect(() => {
    onInput(inputName, value);
  }, [value, inputName, onInput]);

  return (
    <label className='block'>
      <span className='text-gray-700'>{inputName.split('_').join(' ')}</span>
      <input
        type='date'
        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        id={inputName}
        name={inputName}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default DatePicker;
