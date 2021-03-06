import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("CounterSsS - Render");

    // Use object destructuring to obtain the properties from props that you are interested in.
    const { onReset, counters, onInOrDecrement, onDelete } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter key={counter.id} onInOrDecrement={onInOrDecrement} onDelete={onDelete} counter={counter} />
        ))}
      </div>
    );
  }
}

export default Counters;
