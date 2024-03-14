import { useState } from 'react';

export default function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <ul
      style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
      }}
    >
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}

function Task({ todo, onChange, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(todo.title);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={(e) => {
            onChange({
              ...todo,
              done: e.target.checked,
            });
          }}
        />
        {isEdit ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <span>{todo.title}</span>
        )}
      </label>
      {!isEdit && <button onClick={() => setIsEdit(true)}>Edit</button>}
      {isEdit && (
        <button
          onClick={() => {
            onChange({
              ...todo,
              title: title,
            });
            setIsEdit(false);
          }}
        >
          Save
        </button>
      )}
      {isEdit && (
        <button
          onClick={() => {
            setTitle(todo.title);
            setIsEdit(false);
          }}
        >
          Cancel
        </button>
      )}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </>
  );
}
