export default function TodoStats({ todos }) {
  const completedCount = todos.filter(t => t.completed).length;
  const totalCount = todos.length;
  const pendingCount = totalCount - completedCount;

  if (totalCount === 0) return null;

  return (
    <div className="mt-6 pt-4 border-t border-gray-200">
      <div className="flex justify-around text-sm">
        <div className="text-center">
          <p className="text-gray-500">Total</p>
          <p className="text-xl font-bold text-gray-700">{totalCount}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-500">Selesai</p>
          <p className="text-xl font-bold text-green-600">{completedCount}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-500">Tersisa</p>
          <p className="text-xl font-bold text-indigo-600">{pendingCount}</p>
        </div>
      </div>
    </div>
  );
}