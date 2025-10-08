import { Check, Trash2 } from 'lucide-react';
import { TodoContext } from '../context/TodoContext';

export const TodoItem = ({ todo }) => {
  return (
    <TodoContext.Consumer>
      {({ toggleTodo, deleteTodo }) => (
        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <button
            onClick={() => toggleTodo(todo.id)}
            className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
              todo.completed
                ? 'bg-green-500 border-green-500'
                : 'border-gray-300 hover:border-green-400'
            }`}
          >
            {todo.completed && <Check size={16} className="text-white" />}
          </button>

          <span
            className={`flex-1 ${
              todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
            }`}
          >
            {todo.text}
          </span>

          <button
            onClick={() => deleteTodo(todo.id)}
            className="flex-shrink-0 text-red-500 hover:text-red-700 transition-colors"
          >
            <Trash2 size={18} />
          </button>
        </div>
      )}
    </TodoContext.Consumer>
  );
};

