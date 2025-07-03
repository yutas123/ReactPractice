import React, { useState } from 'react';

const NameList: React.FC = () => {
  // ジェネリクスを使った型付き配列
  const names: Array<string> = ['Alice', 'Bob', 'Charlie'];

  const [selectedName, setSelectedName] = useState<string | null>(null);

  return (
    <div>
      <h2>名前リスト</h2>
      <ul>
        {names.map((name) => (
          <li key={name}>
            <button
              onClick={() => setSelectedName(name)}
              style={{
                backgroundColor: selectedName === name ? '#90caf9' : '#eeeeee',
                padding: '8px 16px',
                margin: '4px',
                borderRadius: '8px',
              }}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
      {selectedName && <p>選択された名前：{selectedName}</p>}
    </div>
  );
};

export default NameList;
