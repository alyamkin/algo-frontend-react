import { useState } from 'react';

export default function ResetState() {
  const [version, setVersion] = useState(0);

  return (
    <>
      <button onClick={() => setVersion(version + 1)}>Reset</button>
      <Form key={version} />
    </>
  );
}

function Form() {
  const [name, setName] = useState('Andrey');
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}</p>
    </>
  );
}
