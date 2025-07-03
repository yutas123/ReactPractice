import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import Square from './components/Square';
import Button from './components/Button';
import NameList from './components/NameList';
import MOGButton from './components/MogButton';
import Profile from './components/Profile';

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
      <div className="mt-4">
        <NameList />
      </div>
      {/* ここで ParentComponent を使用 */}
      <ParentComponent />
      <MOGButton
        piyo="もぐもぐ"
        hoge="ぽげぽげ"
      />
      <Profile />
      <Profile textColor="red" />
    </div>
  );
};

// 親コンポーネント
function ParentComponent() {
  return <ChildComponent name="React" />;
}

// 子コンポーネント
function ChildComponent(props: {name: string }) {
  return <div>Hello, {props.name}</div>;
}

export default App;
