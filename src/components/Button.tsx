import React from 'react';

type ButtonProps = {
  label: string;
};

const Button: React.FC<ButtonProps> = (props) => {
  return <button>{props.label}</button>;
};

const names: Array<string> = ['Alice', 'Bob'];

export default Button;
