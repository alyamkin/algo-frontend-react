import { useState, useReducer } from 'react';

function reducer(state, actions) {
  switch (actions.type) {
    case 'increment':
      return { count: state.count + actions.num };
    case 'decrement':
      return { count: state.count - actions.num };
    default:
      throw new Error('Unknown action');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });
  // const [count, setCount] = useState(0);
  // const [value, setValue] = useState('');

  return (
    <>
      {/* <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      /> */}
      {/* <Counter startingCount={10} />
      <Counter /> */}
      {/* <Counter count={count} setCount={setCount} />
      <Counter count={count} setCount={setCount} /> */}
      <Counter
        count={state.count}
        onClick={() => dispatch({ type: 'increment', num: 4 })}
      />
      <Counter
        count={state.count}
        onClick={() => dispatch({ type: 'decrement', num: 1 })}
      />
    </>
  );
}

function Counter({ count, onClick }) {
  // let [count, setCount] = useState(startingCount);

  return (
    <>
      <button onClick={onClick}>Increment</button>
      <p>{count}</p>
    </>
  );
  // return (
  //   <>
  //     <button onClick={() => setCount(count + 1)}>Increment</button>
  //     <p>{count}</p>
  //   </>
  // );

  // return (
  //   <>
  //     <button
  //       onClick={() => {
  //         setCount((prevCount) => prevCount + 1);
  //         setCount((prevCount) => prevCount + 1);
  //         setCount((prevCount) => prevCount + 1);
  //       }}
  //     >
  //       Increment
  //     </button>
  //     <p>{count}</p>
  //   </>
  // );
}

export default App;
