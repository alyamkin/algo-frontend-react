import { useRef } from 'react';

export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    console.log('Counter: ', ref.current);
  }

  return (
    <>
      <button onClick={handleClick}>Click me!</button>
      <p>Counter: {ref.counter}</p>
    </>
  );
}
