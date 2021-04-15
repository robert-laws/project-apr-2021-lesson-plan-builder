import { useState } from 'react';

export const useValidation = () => {
  const [error, setError] = useState(false);

  const onBlur = (event) => {
    if (event.target.value === '') {
      setError(true);
    } else {
      setError(false);
    }
  };

  return [error, onBlur];
};
