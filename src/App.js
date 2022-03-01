import React from "react";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { count: 0 }
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  
  render() {
    return (
      <div>
        <p>{ this.state.count }</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}