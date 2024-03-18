import { useReducer } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';

let nextId = 8;

function createInitialTasks(numberOfTasks) {
  const initialTasks = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
    { id: 3, title: 'Brew tea 1', done: false },
    { id: 4, title: 'Brew tea 2', done: false },
    { id: 5, title: 'Brew tea 3', done: false },
    { id: 6, title: 'Brew tea 4', done: false },
    { id: 7, title: 'Brew tea 5', done: false },
  ];

  if (!numberOfTasks) {
    return initialTasks;
  }

  return initialTasks.slice(0, numberOfTasks);
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          title: action.text,
          done: false,
        },
      ];
    }
    case 'deleted': {
      return tasks.filter((task) => task.id !== action.taskId);
    }
    case 'changed': {
      return tasks.map((task) => {
        if (task.id === action.updatedTask.id) {
          return action.updatedTask;
        } else {
          return task;
        }
      });
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default function TaskAppReducer() {
  const [tasks, dispatch] = useReducer(tasksReducer, null, createInitialTasks);

  function handleChangeTodo(updatedTask) {
    dispatch({
      type: 'changed',
      updatedTask,
    });
  }

  function handleDeleteTodo(taskId) {
    dispatch({
      type: 'deleted',
      taskId,
    });
  }

  function handleAddTodo(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={tasks}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
