import { useState, useEffect } from 'react';

const ExampleComponent = () => {
  // useState フック - 状態管理
  const [count, setCount] = useState(0);

  // useEffect フック - 副作用の処理
  useEffect(() => {
    document.title = `クリック回数: ${count}`;
  }, [count]);

  return (
    <div className="p-4">
      <p className="mb-4">カウント: {count}</p>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        クリック
      </button>
    </div>
  );
}

export default ExampleComponent;
