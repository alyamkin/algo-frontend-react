import { useState, useEffect } from 'react';

export default function CounterInterval() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setcount((c) => c + 1), 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <p>count: {count}</p>
    </>
  );
}
