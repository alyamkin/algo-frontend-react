import { useRef, forwardRef } from 'react';

const MyInput = forwardRef((props, ref) => {
  return (
    <>
      <input ref={ref}></input>
      <button onClick={props.onClick}>Focus the input</button>
    </>
  );
});

export default function Form() {
  const inputRef = useRef(null);

  function handleCLick() {
    console.log('click');
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} onClick={handleCLick} />
    </>
  );
}
