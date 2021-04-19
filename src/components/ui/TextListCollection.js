import React, { useState, useEffect } from 'react';

const TextListCollection = ({ listName, onInput, placeholder }) => {
  const [inputValue, setInputValue] = useState('');
  const [myList, setMyList] = useState([]);
  const [myHtmlList, setMyHtmlList] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddToList = () => {
    setMyList((prevState) => [...prevState, inputValue]);
    setInputValue('');
  };

  useEffect(() => {
    let html = '';
    if (myList.length > 0) {
      html += '<ul>';
      html += myList.map((item) => `<li>${item}</li>`).join('');
      html += '</ul>';
    }
    setMyHtmlList(html);
  }, [myList]);

  useEffect(() => {
    onInput(listName, myHtmlList);
  }, [onInput, listName, myHtmlList]);

  const handleClick = (value) => {
    setMyList((prevState) => {
      return prevState.filter((item) => item !== value);
    });
  };

  return (
    <div>
      <div className='flex'>
        <div className='flex-1'>
          <input
            type='text'
            className='mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50'
            name={listName}
            id={listName}
            value={inputValue}
            onChange={handleChange}
            placeholder={placeholder}
          />
        </div>
        <div className='flex-none flex items-end ml-3'>
          <button
            onClick={handleAddToList}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'
          >
            Add Outcome
          </button>
        </div>
      </div>
      <ul>
        {myList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleClick(`${item}`)}>Click Here</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextListCollection;
