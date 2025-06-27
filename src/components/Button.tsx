import React from 'react';

type ButtonProps = {
  label: string;
};

const Button: React.FC<ButtonProps> = (props) => {
  return <button>{props.label}</button>;
};

const names: Array<string> = ['Alice', 'Bob'];

function identity<T>(value: T): T {
    return value;
}

export default Button;
