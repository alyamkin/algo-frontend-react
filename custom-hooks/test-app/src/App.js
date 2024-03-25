import { useState, useRef, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const prevCount = usePrevious(count);
  const prevText = usePrevious(text);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
      <p>Previous render count: {prevCount}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Previous render text: {prevText}</p>
    </>
  );
}

function usePrevious(value) {
  const prevValue = useRef();

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return prevValue.current;
}
