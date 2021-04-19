import React, { useCallback, useState, useEffect } from 'react';
import TextInput from './TextInput';

const TextListCollection = ({ listName, onInput, placeholder }) => {
  const [formValues, setFormValues] = useState({});
  const [textListNumber, setTextListNumber] = useState(0);

  const inputHandler = useCallback((inputName, value) => {
    setFormValues((prevState) => {
      return { ...prevState, [`${inputName}-${textListNumber}`]: value };
    });
  }, []);

  return (
    <div className='flex items-center'>
      <TextInput
        className='flex-grow-1'
        inputName={listName}
        initialValue=''
        onInput={inputHandler}
        placeholder={placeholder}
      />
      <button className='flex'>Add Outcome</button>
    </div>
  );
};

export default TextListCollection;
