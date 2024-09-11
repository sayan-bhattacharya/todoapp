import React from 'react';
import AddToDo from './components/AddToDo';
import FilterComponent from './components/FilterComponent';
import ToDoList from './components/ToDoList';
import { TodoProvider } from './context/TodoContext';

const App = () => {
  return (
    <TodoProvider>
      <div className='container mx-auto p-4'>
        <AddToDo />
        <FilterComponent />
        <ToDoList />
      </div>
    </TodoProvider>
  );
};

export default App;