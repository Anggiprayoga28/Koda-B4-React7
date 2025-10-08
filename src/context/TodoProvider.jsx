import { useEffect, useState } from 'react';
import { TodoContext } from './TodoContext';

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    try {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    }catch (error){
    console.error(error);
    return [];
    }
  });
  useEffect(() => {
    try {
        localStorage.setItem('todos', JSON.stringify(todos))
    }catch(error){
        console.error(error)
    }
  },[todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const value = {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};
