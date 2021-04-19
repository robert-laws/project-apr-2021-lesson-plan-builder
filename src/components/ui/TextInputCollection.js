import React, { useCallback, useState, useEffect } from 'react';
import TextInput from './TextInput';

const TextInputCollection = ({ listName, onInput, placeholder }) => {
  const [formValues, setFormValues] = useState({});
  const [finalHtml, setFinalHtml] = useState('');

  const inputHandler = useCallback((inputName, value) => {
    setFormValues((prevState) => {
      return { ...prevState, [inputName]: value };
    });
  }, []);

  useEffect(() => {
    let htmlOutput = '<ul>';
    for (const [key, value] of Object.entries(formValues)) {
      htmlOutput += `<li id='${key}'>${value}</li>`;
    }
    htmlOutput += '</ul>';
    setFinalHtml(htmlOutput);
  }, [formValues]);

  const handleNewOutcome = () => {
    setInputNumber((prevState) => prevState + 1);
  };

  useEffect(() => {
    onInput(listName, finalHtml);
  }, [listName, finalHtml, onInput]);

  const [formFields, setFormFields] = useState([]);
  const [inputNumber, setInputNumber] = useState(0);

  const removeTextInput = useCallback((thisOutcome) => {
    setFormValues((prevState) => {
      return Object.fromEntries(
        Object.entries(prevState).filter(([key, value]) => key !== thisOutcome)
      );
    });

    hideInput(thisOutcome);
  }, []);

  const hideInput = (divId) => {
    document.querySelector(`#${divId}`).classList.add('hide');
  };

  useEffect(() => {
    setFormFields((prevState) => [
      ...prevState,
      <div id={`${listName}-${inputNumber}`}>
        <TextInput
          inputName={`${listName}-${inputNumber}`}
          initialValue=''
          onInput={inputHandler}
          placeholder={placeholder}
        />
        <button
          type='button'
          className='px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-2 md:text-lg md:px-4'
          onClick={() => removeTextInput(`${listName}-${inputNumber}`)}
        >
          Remove
        </button>
      </div>,
    ]);
  }, [inputNumber, listName, inputHandler, removeTextInput, placeholder]);

  return (
    <>
      {formFields.map((field, index) => (
        <div key={index}>{field}</div>
      ))}

      <button type='button' onClick={handleNewOutcome}>
        Add New Outcome
      </button>
    </>
  );
};

export default TextInputCollection;
