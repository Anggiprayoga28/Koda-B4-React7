import { useRef, useEffect, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { TodoItem } from './Item';

export const TodoList = () => {
  const listRef = useRef(null);
  const { todos } = useContext(TodoContext);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [todos.length]);

  if (todos.length === 0) {
    return (
      <div className="text-center text-gray-400 py-12">
        <p className="text-lg">Belum ada tugas</p>
      </div>
    );
  }

  return (
    <div 
      ref={listRef}
      className="space-y-2 max-h-96 overflow-y-auto pr-2"
    >
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
