import React, { Component, Fragment } from "react";
import CssBaseline from "material-ui/CssBaseline";

import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";

import { muscles, exercises } from "../store";

class App extends Component {
  state = {
    exercises,
    exercise: {}
  };

  getExercisesByMuscles() {
    const initExercises = muscles.reduce((a, d) => ({ ...a, [d]: [] }), {});
    return Object.entries(
      this.state.exercises.reduce((a, exercise) => {
        const { muscles } = exercise;
        a[muscles] = [...a[muscles], exercise];
        return a;
      }, initExercises)
    );
  }

  handleCategorySelect = category => this.setState({ category });

  handleExerciseSelect = id =>
    this.setState(({ exercises }) => ({
      exercise: exercises.find(e => e.id === id),
      editMode: false
    }));

  handleExerciseDelete = id =>
    this.setState(({ exercises, exercise, editMode }) => ({
      exercises: exercises.filter(e => e.id !== id),
      editMode: exercise.id === id ? false : editMode,
      exercise: exercise.id === id ? {} : exercise
    }));

  handleSelectEdit = id =>
    this.setState(({ exercises }) => ({
      editMode: true,
      exercise: exercises.find(e => e.id === id)
    }));

  createExercise = exercise =>
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise]
    }));

  editExercise = exercise =>
    this.setState(({ exercises }) => ({
      exercises: [...exercises.filter(ex => ex.id !== exercise.id), exercise],
      exercise,
      editMode: false
    }));

  render() {
    const exercises = this.getExercisesByMuscles();
    const { category, exercise, editMode } = this.state;
    return (
      <Fragment>
        <CssBaseline />
        <Header muscles={muscles} onExerciseCreate={this.createExercise} />
        <Exercises
          category={category}
          muscles={muscles}
          exercise={exercise}
          exercises={exercises}
          editMode={editMode}
          onSelect={this.handleExerciseSelect}
          onDelete={this.handleExerciseDelete}
          onSelectEdit={this.handleSelectEdit}
          endSelectEdit={this.endSelectEdit}
          onEdit={this.editExercise}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelect}
        />
      </Fragment>
    );
  }
}

export default App;
