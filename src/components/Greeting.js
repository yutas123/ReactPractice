import React from 'react';

const Greeting = (props) => {
  return (
    <div className="p-4 bg-blue-100 rounded-lg">
      <h2 className="text-xl font-bold">{props.name}さん、こんにちは！</h2>
      <p className="mt-2">{props.message}</p>
    </div>
  );
};

export default Greeting;
