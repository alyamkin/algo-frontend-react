import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'changed_name':
      return { ...state, name: action.nextName };
    case 'changed_age':
      return { ...state, age: action.nextAge };
    default:
      return state;
  }
}

export default function FormWithReducer() {
  const [state, dispatch] = useReducer(reducer, { age: 0, name: '' });

  const hadleChangeName = (e) => {
    dispatch({ type: 'changed_name', nextName: e.target.value });
  };

  const handleIncrementAge = () => {
    dispatch({ type: 'changed_age', nextAge: state.age + 1 });
  };
  return (
    <>
      <input type="text" onChange={hadleChangeName} placeholder="user name" />
      <button onClick={handleIncrementAge}>Increment age</button>
      <p>
        Hello, {state.name}. You are {state.age}
      </p>
    </>
  );
}
