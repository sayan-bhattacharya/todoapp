import React from 'react';
import ToDoItem from './ToDoItem';
import { useTodos } from '../context/TodoContext';

const ToDoList = () => {
  const { state, dispatch } = useTodos();
  const { todos, filter } = state;

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'completed' && todo.completed) return true;
    if (filter === 'active' && !todo.completed) return true;
    return false;
  });

  return (
    <ul>
      {filteredTodos.map(todo => (
        <ToDoItem key={todo.id} todo={todo} toggleTodo={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })} />
      ))}
    </ul>
  );
};

export default ToDoList;