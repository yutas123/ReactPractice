import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import Square from './components/Square';
import Button from './components/Button';

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
      <div className="mt-4">
        <Square />
      </div>
      <div className="mt-4">
        <Button label="クリックしてください" />
        <Button label="送信" />
        <Button label="キャンセル" />
      </div>
      {/* ここで ParentComponent を使用 */}
      <ParentComponent />
    </div>
  );
};




// 親コンポーネント
function ParentComponent() {
  return <ChildComponent name="React" />;
}

// 子コンポーネント
function ChildComponent(props) {
  return <div>Hello, {props.name}</div>;
}

export default App;
