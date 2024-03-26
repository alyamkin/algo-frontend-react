import { useState, Profiler } from 'react';

let renderCount = 0;

export default function App() {
  renderCount++;
  return (
    <Profiler id="App" onRender={() => console.log('commit')}>
      <Counter initialValue={5} />
      <Counter />
      <p>Render count: {renderCount}</p>
    </Profiler>
  );
}

function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  const startTime = Date.now();

  while (new Date() - startTime < 2000) {}
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </>
  );
}
