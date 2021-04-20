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
      <div className='mt-8 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 grid-cols-1 gap-4 md:gap-4 sm:gap-0 items-start'>
        <div className='grid grid-cols-1 col-span-3 sm:mb-4'>
          <input
            type='text'
            className='block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 py-2'
            name={listName}
            id={listName}
            value={inputValue}
            onChange={handleChange}
            placeholder={placeholder}
          />
        </div>
        <div className='grid grid-cols-1'>
          <button
            onClick={handleAddToList}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-3 px-4 rounded-lg w-full'
          >
            {`Add ${listName}`}
          </button>
        </div>
      </div>
      <ul className='list-disc ml-8 sm:mt-4'>
        {myList.map((item, index) => (
          <li className='my-2' key={index}>
            {item}
            <button
              className='ml-4 button-small bg-red-500 hover:bg-red-700 text-white font-bold px-2 py-1 text-xs rounded-md'
              onClick={() => handleClick(`${item}`)}
            >
              Remove this Item
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextListCollection;
