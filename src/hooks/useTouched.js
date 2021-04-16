import { useState } from 'react';

export const useTouched = (touchState) => {
  const [touched, setTouched] = useState(touchState);

  const onBlur = () => {
    setTouched(true);
  };

  return [touched, onBlur];
};
