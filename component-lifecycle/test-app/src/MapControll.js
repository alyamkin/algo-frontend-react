import { useState } from 'react';
import Map from './Map';

export default function MapControll() {
  const [zoomLevel, setZoomLevel] = useState(0);
  return (
    <>
      <p>Zoom level: {zoomLevel}x</p>
      <button onClick={() => setZoomLevel(zoomLevel + 1)}>+</button>
      <button onClick={() => zoomLevel > 0 && setZoomLevel(zoomLevel - 1)}>
        -
      </button>
      <hr />
      <Map zoomLevel={zoomLevel} />
    </>
  );
}
