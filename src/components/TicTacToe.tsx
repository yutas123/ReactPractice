import { useState } from 'react';

export default function TicTacToe() {
  function Input (text) {
    return(
      <input type="text" />
    );
  }

  function InputList (props) {
    return(
      <div>
        <h3>Input List</h3>
        <div>{props.text}</div>        
      </div>
    );
  }

  function add (props) {
    console.log(props);
    return(
      <div>
        <h3>Input List</h3>
        <div>{props}</div>        
      </div>
    );
  }

  return (
    <div className="App">
      <Input text="test"/>
      <button onClick={ () => add("aaa")}>追加</button>
      <InputList/>
    </div>
  );
}