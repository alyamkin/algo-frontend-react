import { useState } from 'react';
import { createPortal } from 'react-dom';
import './App.css';

function App() {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <div className="container" onClick={() => console.log('Click container')}>
        <button onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? 'Show Modal' : 'Hide Modal'}
        </button>
        {isHidden || <Modal />}
      </div>

      <p className="other">Other Content</p>
    </>
  );
}

export default App;

function Modal() {
  return createPortal(
    <p className="modal">Modal</p>,
    document.getElementById('modal-root')
  );
}
