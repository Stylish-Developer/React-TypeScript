import React, { Component } from "react";

interface Props {
  message: string;
}

interface StateProp {
  count: number;
}

class ClsComponent extends Component<Props, StateProp> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({
        count: prevState.count + 1
      }));
  };

  render() {
    return (
      <>
        <h4>
          This component explain class component concept in react typescript
        </h4>
        <button onClick={this.handleClick}>count</button>
        <p>{this.props.message} {this.state.count}</p>
      </>
    );
  }
}

export default ClsComponent;
