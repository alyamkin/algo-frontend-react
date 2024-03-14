import { useState } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';

let nextId = 3;

const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleChangeTodo(updatedTodo) {
    console.log('change request');
    setTodos(
      todos.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        } else {
          return todo;
        }
      })
    );
  }

  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleAddTodo(title) {
    const todo = {
      id: nextId++,
      title,
      done: false,
    };
    setTodos([...todos, todo]);
  }

  return (
    <>
      <AddTodo onAddTodo={handleAdd} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
