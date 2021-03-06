import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    // Called after component is rendered in DOM
    // Eg do Ajax calls here
    // this.setState({ }) ..
    console.log("App - Mounted");
  }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  // handleIncrement = (counter) => {
  //   // We do not update the state directly.
  //   // Instead, create new counters array and give that to the set state method and have React update the state.

  //   // Use the spread operator (...) to be able to clone the exact array
  //   const counters = [...this.state.counters];

  //   // However, this seems to work exactly like that as
  //   // const counters = this.state.counters;

  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value++;

  //   this.setState({ counters });
  // };

  handleInOrDecrement = (counter, isIncrement) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };

    isIncrement ? counters[index].value++ : counters[index].value--;

    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);

    // this.setState({ counters: counters }); as key and value are equal, simplify like:
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter((c) => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onInOrDecrement={this.handleInOrDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
