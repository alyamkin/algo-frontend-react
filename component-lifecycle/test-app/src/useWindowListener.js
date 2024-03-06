import { useEffect } from 'react';

export function useWindowListener(eventType, listener) {
  useEffect(() => {
    document.addEventListener(eventType, listener);

    return () => document.removeEventListener(eventType, listener);
  }, [eventType, listener]);
}
