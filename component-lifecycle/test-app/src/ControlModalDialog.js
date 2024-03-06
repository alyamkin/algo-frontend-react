import { useState } from 'react';
import ModalDialog from './ModalDialog';

export default function ControlModalDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open dialog</button>
      <ModalDialog isOpen={isOpen}>
        <h1>Hello there!</h1>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </ModalDialog>
    </>
  );
}
