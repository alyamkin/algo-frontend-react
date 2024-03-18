import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'changed_name':
      return { ...state, userName: action.nextName };
    default:
      return state;
  }
}

export default function ReducerDemo() {
  const [state, dispatch] = useReducer(reducer, { userName: '' });
  return (
    <>
      <input
        type="text"
        placeholder="user name"
        onChange={(e) =>
          dispatch({ type: 'changed_name', nextName: e.target.value })
        }
      ></input>
      <p>{state.userName}</p>
    </>
  );
}
