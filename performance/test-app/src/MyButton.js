import { memo } from 'react';

export default memo(function MyButton(props) {
  const startDate = new Date();

  while (new Date() - startDate < 1000) {}
  console.log('Rerender MyButton Component');
  return <button {...props} style={{ color: 'red' }}></button>;
});

// function areEqual(prevProps, newProps) {
//   console.log('prevProps', prevProps);
//   console.log('newProps', newProps);
// }
