import React from 'react';
import Greeting from './components/Greeting';

// 親コンポーネント
const App = () => {
  return (
    <div className="p-8">
      <Greeting 
        name="田中"
        message="今日も一日頑張りましょう！"
      />
    </div>
  );
};

export default App;
