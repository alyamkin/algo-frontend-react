import { useState } from 'react';
import { useImmer } from 'use-immer';

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
  const [list, updateList] = useImmer(initialList);

  function handleToggle(artWorkId, nextSeen) {
    updateList((draft) => {
      const artwork = draft.find((a) => a.id === artWorkId);
      artwork.seen = nextSeen;
    });
  }
  // const [list, setList] = useState(initialList);

  // function handleToggle(artWorkId, nextSeen) {
  //   setList(
  //     list.map((item) => {
  //       if (item.id === artWorkId) {
  //         return { ...item, seen: nextSeen };
  //       } else {
  //         return item;
  //       }
  //     })
  //   );
  // }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see</h2>
      <ItemList artWorks={list} onToggle={handleToggle} />
    </>
  );
}

function ItemList({ artWorks, onToggle }) {
  return (
    <ul>
      {artWorks.map((artWork) => (
        <li key={artWork.id}>
          <input
            type="checkbox"
            checked={artWork.seen}
            onChange={(e) => onToggle(artWork.id, e.target.checked)}
          />
          {artWork.title}
        </li>
      ))}
    </ul>
  );
}
