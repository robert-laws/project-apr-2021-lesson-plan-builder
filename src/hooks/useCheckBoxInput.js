import { useState } from 'react';

export const useCheckBoxInput = (
  initialValue = { name: 'Untitled Checkbox', checked: false }
) => {
  const [value, setValue] = useState(initialValue);

  const onChange = () => {
    setValue((prevState) => {
      return {
        ...prevState,
        checked: !prevState.checked,
      };
    });
  };

  return [value, onChange];
};
