import { useRef, useEffect } from 'react';
import { MapWidget } from './map-widget';

export default function Map({ zoomLevel }) {
  const mapRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (mapRef.current === null) {
      mapRef.current = new MapWidget(containerRef.current);
    }

    const map = mapRef.current;
    map.setZoom(zoomLevel);
  }, [zoomLevel]);

  return (
    <>
      <p>Map Container {zoomLevel}</p>
      <div
        ref={containerRef}
        style={{
          width: '1024px',
          height: '1024px',
        }}
      />
    </>
  );
}
