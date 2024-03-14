import { useState } from 'react';

export default function MyCheckbox() {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={liked}
          onChange={(e) => setLiked(!liked)}
        />
        I liked this
      </label>
      <p>You {liked ? 'liked' : 'did not like'} this.</p>
    </>
  );
}
