import { useState } from 'react';
let renderCycle = 0;

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending((p) => p + 1);
    await delay(3000);
    console.log('pending');
    setPending((p) => p - 1);
    setCompleted((c) => c + 1);
  }

  renderCycle += 1;
  console.log('Render cycle: ', renderCycle);

  return (
    <>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </>
  );
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
