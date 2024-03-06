import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

export default function Box() {
  const ref = useRef(null);

  const isIntersecting = useIntersectionObserver(ref);

  useEffect(() => {
    if (isIntersecting) {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }, [isIntersecting]);

  return (
    <div
      ref={ref}
      style={{
        margin: '20px',
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
        border: '1px solid black',
      }}
    />
  );
}
