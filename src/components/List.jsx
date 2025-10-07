import { useRef, useEffect } from 'react';
import TodoItem from './Item';

export default function TodoList({ todos, onToggle, onDelete }) {
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [todos.length]);

  if (todos.length === 0) {
    return (
      <div className="text-center text-gray-400 py-12">
        <p className="text-lg">Belum ada todo</p>
        <p className="text-sm mt-2">Tambahkan yang pertama di atas!</p>
      </div>
    );
  }

  return (
    <div 
      ref={listRef}
      className="space-y-2 max-h-96 overflow-y-auto pr-2"
    >
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}