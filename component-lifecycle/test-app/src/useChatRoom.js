import { useEffect } from 'react';
import createConnection from './creteConnection';

export function useChatRoom({ serverUrl, roomId }) {
  useEffect(() => {
    function createOptions() {
      return {
        serverUrl,
        roomId,
      };
    }
    const options = createOptions();

    const connection = new createConnection(options);
    connection.connect();

    return () => connection.disconnect();
  }, [serverUrl, roomId]);
}
