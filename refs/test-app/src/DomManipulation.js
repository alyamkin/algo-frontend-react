import { useRef, useState } from 'react';

export default function DomManipulation() {
  const [show, setShow] = useState(null);
  const ref = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          ref.current.remove();
        }}
      >
        Remove from DOM
      </button>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle with setState
      </button>
      {show && <p ref={ref}>Hello world!</p>}
    </div>
  );
}
