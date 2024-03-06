import { useState } from 'react';
import { useWindowListener } from './useWindowListener';

export default function PointerMove() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useWindowListener('pointermove', handleMove);

  return (
    <div
      style={{
        position: 'absolute',
        left: -20,
        top: -20,
        borderRadius: '50%',
        opacity: 0.6,
        width: '50px',
        height: '50px',
        backgroundColor: 'salmon',
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
}
