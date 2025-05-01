import React from 'react';

const Counter = () => {
  let num = 0
  const onClickButton = () => {
    num +=1
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
