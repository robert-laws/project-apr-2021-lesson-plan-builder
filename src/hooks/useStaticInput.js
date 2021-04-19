import { useState } from 'react';

export const useStaticInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const onUpdate = (newValue) => {
    setValue(newValue);
  };

  return [value, onUpdate];
};
