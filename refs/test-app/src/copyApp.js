import { useState, useRef, useEffect, forwardRef } from 'react';
import './App.css';

function App() {
  // const [seconds, setSeconds] = useState(0);
  // const [timerID, setTimerID] = useState(null);
  // const [timerID, setTimerID] = useState({
  //   current: null,
  // });
  // const timerID = useRef(null);
  // const [name, setName] = useState('');
  // const inputRef = useRef('');

  // const startTimer = () => {
  //   timerID.current = setInterval(
  //     () => setSeconds((currentSeconds) => currentSeconds + 1),
  //     1000
  //   );

  //   // setTimerID(timerID);
  // };

  // const stopTimer = () => {
  //   clearInterval(timerID.current);
  // };

  const focusInput = () => {
    inputRef.current.focus();
  };

  // useEffect(() => {
  //   inputRef.current.focus();
  // });
  // console.log(inputRef.current.value);

  return (
    // <div>
    //   <button onClick={startTimer}>Start</button>
    //   <button onClick={stopTimer}>Stop</button>
    //   <p>seconds: {seconds}</p>
    // </div>

    <>
      <MyInput ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}

const MyInput = forwardRef(function (props, ref) {
  return <input ref={ref} {...props} style={{ color: 'green' }} />;
});

export default App;
