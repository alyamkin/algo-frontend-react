import './App.css';
import { useState } from 'react';
import Counter from './Counter';

function App() {
  const [isShown, setIsShown] = useState(true);
  return (
    <>
      <button onClick={() => setIsShown(!isShown)}>
        {isShown ? 'Hide Counter' : 'Show Counter'}
      </button>
      {isShown ? <Counter /> : null}
    </>
  );
}

export default App;
