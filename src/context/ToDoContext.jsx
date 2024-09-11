import React, { createContext, useReducer, useContext } from 'react';

// Initial state
const initialState = {
todos: [],
filter: 'all',
};

// Reducer function
const todoReducer = (state, action) => {
switch (action.type) {
case 'ADD_TODO':
    return { ...state, todos: [action.payload, ...state.todos] };
case 'TOGGLE_TODO':
    return {
    ...state,
    todos: state.todos.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
    ),
    };
case 'SET_FILTER':
    return { ...state, filter: action.payload };
default:
    return state;
}
};

// Create context
const TodoContext = createContext();

// Provider component
export const TodoProvider = ({ children }) => {
const [state, dispatch] = useReducer(todoReducer, initialState);

return (
<TodoContext.Provider value={{ state, dispatch }}>
    {children}
</TodoContext.Provider>
);
};

// Custom hook to use the TodoContext
export const useTodos = () => useContext(TodoContext);