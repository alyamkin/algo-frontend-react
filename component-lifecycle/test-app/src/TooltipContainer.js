export default function TooltipContainer({ tooltipRef, children, x, y }) {
  return (
    <div
      ref={tooltipRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      {children}
    </div>
  );
}
