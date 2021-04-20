import React, { useState, useEffect, useCallback } from 'react';
import RadioButton from './RadioButton';
import AttentionText from './AttentionText';

const RadioButtonList = ({
  listName,
  items,
  onInput,
  checkedList,
  required = false,
}) => {
  const [checkBoxes, setCheckBoxes] = useState(checkedList);

  const checkChange = useCallback((radio) => {
    if (radio.checked === true) {
      setCheckBoxes([radio.number]);
    }
  }, []);

  useEffect(() => {
    onInput(listName, checkBoxes);
  }, [listName, checkBoxes, onInput]);

  return (
    <div>
      <div className='block'>
        <span className='text-gray-700'>{listName}</span>
        {required && <AttentionText>* required</AttentionText>}
        <div className='mt-2'>
          {items.map((item) => (
            <div key={item.id}>
              <RadioButton
                id_number={item.id}
                listName={listName}
                itemName={item.name}
                checked={checkBoxes.includes(parseInt(item.id)) ? true : false}
                checkChange={checkChange}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RadioButtonList;