import { useRef, useEffect } from 'react';

export default function ModalDialog({ isOpen, children }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const dialog = ref.current;
    dialog.showModal();

    return () => dialog.close();
  }, [isOpen]);

  return <dialog ref={ref}>{children}</dialog>;
}
