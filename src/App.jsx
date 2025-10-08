import { TodoProvider } from './context/TodoProvider';
import { TodoHeader } from './components/Header';
import { TodoInput } from './components/Input';
import { TodoList } from './components/List';
import { TodoStats } from './components/Statistik';

const App = () => {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
          <TodoHeader />
          <TodoInput />
          <TodoList />
          <TodoStats />
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;