import React, { useState, useEffect, useCallback } from 'react';
import CheckBox from './CheckBox';

const CheckBoxList = ({
  listName,
  labelName,
  items,
  onInput,
  checkedList,
  orientation = 'vertical',
}) => {
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
        <span className='text-gray-700 font-medium'>{labelName}</span>
        <div
          className={`mt-2 grid ${
            orientation === 'vertical'
              ? 'grid-cols-1'
              : 'lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'
          } col-span-1 gap-2 pr-4`}
        >
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
