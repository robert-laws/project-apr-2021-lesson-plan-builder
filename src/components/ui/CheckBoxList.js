import React, { useState, useEffect, useCallback } from 'react';
import CheckBox from './CheckBox';

const CheckBoxList = ({ listName, items, onInput, checkedList }) => {
  const [checkBoxes, setCheckBoxes] = useState([]);

  const checkChange = useCallback((box) => {
    if (box.checked === true) {
      setCheckBoxes((prevState) => {
        return [...prevState, box.number];
      });
    } else {
      setCheckBoxes((prevState) => {
        return prevState.filter((item) => item !== box.number);
      });
    }
  }, []);

  useEffect(() => {
    onInput(listName, checkBoxes);
  }, [listName, checkBoxes, onInput]);

  return (
    <div>
      <div className='block'>
        <span className='text-gray-700'>{listName.split('_').join(' ')}</span>
        <div className='mt-2'>
          {items.map((item) => (
            <div key={item.id}>
              <CheckBox
                id_number={item.id}
                itemName={item.name}
                checked={checkedList.includes(parseInt(item.id)) ? true : false}
                checkChange={checkChange}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckBoxList;
