import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'no set',
    };
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>state：{this.state.value}.</h2>
      </div>
    );
  }
}

export default Square;
