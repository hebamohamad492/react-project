import { Component } from "react";

class CounterClassComponent extends Component {
  state = {
    count: 5,
  };

  componentDidMount() {
    console.log("component mounted");
  }

  componentDidUpdate() {
    console.log("component updated");
  }

  componentWillUnmount() {
    console.log("component will be destroyed/unmouted");
  }

  render() {
    return (
      // JSX
      <div>Counter</div>
    );
  }
}
