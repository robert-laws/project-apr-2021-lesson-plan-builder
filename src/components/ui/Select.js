import React, { useEffect } from 'react';
import { useInput } from '../../hooks/useInput';
import AttentionText from './AttentionText';
import Label from './Label';

const Select = ({
  optionList,
  onSelect,
  name,
  labelName,
  initialText = 'Make a Selection',
  complex = false,
  required = false,
  hideLabel = false,
}) => {
  const [value, onChange] = useInput('');

  useEffect(() => {
    onSelect(name, value);
  }, [value, name, onSelect]);

  return (
    <label className='block'>
      {!hideLabel && <Label inputName={name}>{labelName}</Label>}
      {required && <AttentionText>* required</AttentionText>}
      <select
        className='block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      >
        <option value=''>{initialText}</option>
        {complex
          ? optionList.map((item) => (
              <option key={item.id} value={item.id}>{`${
                item.title?.rendered || item.title
              } -- ${item.acf.faculty_last_name}`}</option>
            ))
          : optionList.map((item) => (
              <option key={item.id} value={item.id}>{`${
                item.title?.rendered || item.title
              }`}</option>
            ))}
      </select>
    </label>
  );
};

export default Select;
