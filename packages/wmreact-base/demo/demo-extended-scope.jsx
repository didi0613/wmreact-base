import React, { Component } from "react";
import { focusOnChange } from "../src/index";

const FocusChange = focusOnChange(
  index => (
    <label key={index}>
      Focusable input: <input />
    </label>
  ),
  { state: "1" },
  "input"
);

const FocusChange2 = focusOnChange(
  "input",
  ({ state }, { state: oldState }) => state !== oldState && oldState === "1"
);

class FocusOnChangeExample extends Component {
  constructor() {
    super();
    this.state = { value: 0 };
  }

  render() {
    return (
      <div>
        <label>
          State:
          <input
            type="number"
            value={this.state.value}
            onChange={ev => this.setState({ value: ev.target.value })}
          />
        </label>
        <br />
        <FocusChange state={this.state.value} />
        <FocusChange2 state={this.state.value} />
      </div>
    );
  }
}
export { FocusOnChangeExample };
