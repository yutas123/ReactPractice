import { use, useState } from 'react';

export default function TicTacToe() {
  const [hoge, setText] = useState("");
  const [inputValue, setinputValue] = useState("");

  function Input (props) {
    return(
      <input 
        type="text"
        value={props.value}
        onChange={props.onChange}
      />
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
    setText(props);
    setinputValue(props);
  }

  return (
    <div className="App">
      <Input
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
      />
      <button onClick={ () => add(inputValue)}>追加</button>
      <InputList text={hoge}/>
    </div>
  );
}