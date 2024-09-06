import {useEffect, useState} from 'react';

export const useDebouncedValue = (input: string = '', ms: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(input);
    }, ms);

    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  return {
    debouncedValue,
  };
};
