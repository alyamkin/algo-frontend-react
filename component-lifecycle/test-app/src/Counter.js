import { useState, useEffect, useLayoutEffect } from 'react';

// Mount (initial render) -> updates (re-render) -> unmount

export default function Counter() {
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(false);

  // useEffect(() => {
  //   console.log('render');
  // });

  useLayoutEffect(() => {
    console.log('count change');

    if (count === 3) {
      setCount(4);
    }

    return () => console.log('cleanup count change');
  }, [count]);

  // useLayoutEffect(() => {
  //   console.log('count change');

  //   if (count === 3) {
  //     setCount(4);
  //   }
  //   return () => console.log('cleanup count change');
  // }, [count]);

  // useEffect(() => {
  //   console.log('count change');

  //   return () => console.log('cleanup count change');
  // }, [count]);

  // useEffect(() => {
  //   console.log('mounted');

  //   return () => console.log('unmounted');
  // }, []);

  // useEffect(() => {
  //   console.log('pressed re-render');
  // }, [bool]);

  const startTime = new Date();
  while (new Date() - startTime < 100) {}

  console.log('BEFORE RETURN');

  return (
    <div className="counter">
      <button onClick={() => setBool(!bool)}>Re-Render</button>
      <button onClick={() => setBool(setCount(count + 1))}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}
