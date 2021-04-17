import { useState, useEffect } from 'react';

export const useValidation = (value = '') => {
  const [error, setError] = useState(true);
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    if (value === '') {
      setErrorText('Please enter a value.');
      setError(true);
    } else if (value.length < 5) {
      setErrorText('Enter a value of at least 5 characters.');
      setError(true);
    } else {
      setErrorText('');
      setError(false);
    }
  }, [value, setError]);

  return [error, errorText];
};
