import { useRef, useLayoutEffect, useState } from 'react';
import TooltipContainer from './TooltipContainer';

export default function Tooltip({ children, targetRect }) {
  const [tooltipHeight, setTooltipHeight] = useState(0);
  const tooltipRef = useRef(null);

  useLayoutEffect(() => {
    const { height } = tooltipRef.current.getBoundingClientRect();
    setTooltipHeight(height);
  }, []);

  let tooltipX = 0;
  let tooltipY = 0;

  if (targetRect !== null) {
    tooltipX = targetRect.left;
    tooltipY = targetRect.top - tooltipHeight;

    if (tooltipY < 0) {
      tooltipY = targetRect.bottom;
    }
  }

  const startDate = new Date();
  while (new Date() - startDate < 100);

  return (
    <TooltipContainer tooltipRef={tooltipRef} x={tooltipX} y={tooltipY}>
      {children}
    </TooltipContainer>
  );
}
