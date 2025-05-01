import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

// 親コンポーネント
const App = () => {
  return (
    <div className="p-8">
      <Greeting 
        name="田中"
        message="今日も一日頑張りましょう！"
      />
      <div className="mt-4">
        <Counter />
      </div>
    </div>
  );
};

export default App;
