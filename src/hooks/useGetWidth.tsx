import { useState, useCallback } from 'react';

function useGetWidth() {
  const [width, setWidth] = useState(0);

  const ref = useCallback((node: HTMLDivElement) => {
    if (node !== null && node instanceof HTMLDivElement) {
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);

  return [width, ref];
}

export default useGetWidth;
