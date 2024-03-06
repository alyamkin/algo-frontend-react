import { useRef, useState } from 'react';
import Tooltip from './Tooltip';

export default function ButtonWithTooltip({ tooltipContent, ...rest }) {
  const [targetRect, setTargectRect] = useState(null);
  const buttonRef = useRef(null);
  return (
    <>
      <button
        {...rest}
        ref={buttonRef}
        onPointerEnter={() => {
          const rect = buttonRef.current.getBoundingClientRect();
          setTargectRect({
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
          });
        }}
        onPointerLeave={() => {
          setTargectRect(null);
        }}
      ></button>
      {targetRect && (
        <Tooltip targetRect={targetRect}>{tooltipContent}</Tooltip>
      )}
    </>
  );
}
