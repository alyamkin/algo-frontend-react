import { useState } from 'react';
import { sculptureList } from './data';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const sculpture = sculptureList[index];
  return (
    <>
      <button onClick={() => setIndex(index + 1)}>Next</button>
      <div>
        <h2>
          {sculpture.name} by {sculpture.artist}
        </h2>
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Hide' : 'Show'} details
        </button>
        {showMore && <p>{sculpture.description}</p>}
        <p>
          ({index + 1} of {sculptureList.length})
        </p>
        <img src={sculpture.url} alt={sculpture.alt}></img>
      </div>
    </>
  );
}
