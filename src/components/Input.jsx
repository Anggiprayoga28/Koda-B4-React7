import { useRef } from 'react';
import { Plus } from 'lucide-react';

export default function TodoInput({ onAdd }) {
  const inputRef = useRef(null);

  const handleAdd = () => {
    const text = inputRef.current.value.trim();
    if (text === '') return;
    
    onAdd(text);
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="flex gap-2 mb-6">
      <input
        ref={inputRef}
        type="text"
        placeholder="Tambahkan todo baru..."
        onKeyPress={handleKeyPress}
        className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
      />
      <button
        onClick={handleAdd}
        className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors font-medium flex items-center gap-2"
      >
        <Plus size={20} />
        Tambah
      </button>
    </div>
  );
}