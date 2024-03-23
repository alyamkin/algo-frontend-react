import { useState, forwardRef, useImperativeHandle } from 'react';

export default forwardRef(function CustomInput(props, ref) {
  const [inputValue, setInputValue] = useState('');

  useImperativeHandle(ref, () => {
    return {
      reset: () => setInputValue(''),
    };
  });
  return (
    <>
      <input
        {...props}
        value={inputValue}
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
});
