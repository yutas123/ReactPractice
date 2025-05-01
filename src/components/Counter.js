import React, { useState } from 'react';

const Counter = () => {
    // useState(0)の戻り値をコンソールに出力
    const stateArray = useState(0);
    console.log('useState(0)の戻り値:', stateArray);
    
    // 通常の分割代入を使用
    const [num,setNum] = useState(0)
    const onClickButton = () => {
      setNum(num+1)
      console.log(num)
    }
    return (
      <>
        {num}
        <button onClick={onClickButton}>+1</button>
      </>
    )
  }

export default Counter;
