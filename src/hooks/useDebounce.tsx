import { useState } from 'react';

function useDebounce() {
  const [newTimeout, setNewTimeout] = useState<any>();

  function debounce(func: () => void, wait: number) {
    clearTimeout(newTimeout);

    const timeout = setTimeout(() => {
      func();
    }, wait);
    setNewTimeout(timeout);
  }

  return debounce;
}

export default useDebounce;
