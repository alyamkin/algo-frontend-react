import { useState } from 'react';
import ChatRoom from './ChatRoom';

export default function ChatRoomSelector() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);
  return (
    <>
      <label>Choose the chat room:</label>
      <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
        <option value="general">general</option>
        <option value="travel">travel</option>
        <option value="music">music</option>
      </select>
      <button onClick={() => setShow(!show)}>
        {show ? 'Close chat' : 'Open chat'}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}
