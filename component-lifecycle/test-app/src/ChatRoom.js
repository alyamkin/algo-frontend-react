import { useState } from 'react';
import { useChatRoom } from './useChatRoom';

export default function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');
  const [message, setMessage] = useState('');

  useChatRoom({
    serverUrl,
    roomId,
  });

  return (
    <>
      <label htmlFor="serverUrl">Server URL:</label>
      <input
        id="serverUrl"
        value={serverUrl}
        onChange={(e) => setServerUrl(e.target.value)}
      ></input>
      <h1>Welcome to the {roomId} room!</h1>
      <label>
        Your message:{' '}
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
    </>
  );
}
