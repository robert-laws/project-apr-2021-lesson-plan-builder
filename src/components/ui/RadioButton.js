import React, { useEffect } from 'react';
import { useCheckBoxInput } from '../../hooks/useCheckBoxInput';

const RadioButton = ({
  listName,
  id_number,
  itemName,
  checked,
  checkChange,
}) => {
  const [value, onChange] = useCheckBoxInput({
    name: itemName,
    number: id_number,
    checked: checked,
  });

  useEffect(() => {
    checkChange(value);
  }, [value, checkChange]);

  useEffect(() => {
    if (checked !== value.checked) {
      onChange({ ...value, checked: checked });
    }
  }, [checked, value, onChange]);

  return (
    <div>
      <label className='inline-flex items-center'>
        <input
          id={id_number}
          className='form-radio'
          type='radio'
          checked={checked}
          name={listName}
          value={value.id_number}
          onChange={onChange}
        />
        <span className='ml-2'>{itemName}</span>
      </label>
    </div>
  );
};

export default RadioButton;
