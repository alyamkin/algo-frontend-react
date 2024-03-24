import { useState, useMemo, useCallback, lazy, Suspense } from 'react';
// import MyButton from './MyButton';
const MyButton = lazy(() => import('./MyButton'));

function App() {
  const [num, setNumber] = useState(1);
  const [logValue, setLogValue] = useState('');
  const fibNumer = useMemo(() => {
    console.log('Recalculating fib numbers');
    return fib(num);
  }, [num]);

  // const onClickLog = useMemo(
  //   () => () => {
  //     console.log(logValue);
  //   },
  //   [logValue]
  // );
  const onClickLog = useCallback(() => {
    console.log(logValue);
  }, [logValue]);
  return (
    <>
      <h1>
        Fib {num} is {fibNumer}
      </h1>
      <input
        type="number"
        value={num}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <input
        type="text"
        value={logValue}
        onChange={(e) => setLogValue(e.target.value)}
      />
      {logValue.length > 0 ? (
        <Suspense fallback={<div>...Loading</div>}>
          <MyButton onClick={onClickLog}>Log Value</MyButton>
        </Suspense>
      ) : null}
    </>
  );
}

export default App;

function fib(n) {
  if (n === 2) return 1;
  if (n === 1) return 0;
  return fib(n - 1) + fib(n - 2);
}
