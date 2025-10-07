import { useState, useEffect } from 'react';
import TodoHeader from './components/Header';
import TodoInput from './components/Input';
import TodoList from './components/List';
import TodoStats from './components/Statistik';

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        <TodoHeader />
        
        <TodoInput onAdd={addTodo} />
        
        <TodoList 
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
        
        <TodoStats todos={todos} />
      </div>
    </div>
  );
}