import React, { Component, Fragment } from "react";

import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";

import { muscles, exercises } from "../store";

class App extends Component {
  state = {
    exercises,
    exercise: {}
  };

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((a, exercise) => {
        const { muscles } = exercise;
        a[muscles] = a[muscles] ? [...a[muscles], exercise] : [exercise];
        return a;
      }, {})
    );
  }

  handleCategorySelected = category => {
    this.setState({ category });
  };

  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(e => e.id === id)
    }));
  };

  render() {
    const exercises = this.getExercisesByMuscles();
    const { category, exercise } = this.state;
    return (
      <Fragment>
        <Header />
        <Exercises
          category={category}
          exercise={exercise}
          exercises={exercises}
          onSelect={this.handleExerciseSelected}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  }
}

export default App;
