import React, { Component } from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

import Input from "./components/commonComponents/input/input";
import Button from "./components/commonComponents/Button/Button";
import Nav from "./components/commonComponents/nav/nav";
import Footer from "./components/commonComponents/footer/footer";
import WorkoutAddForm from "./components/workoutAddForm/workoutAddForm";
import HomePage from "./pages/home/home";
import SettingsPage from "./pages/settings/settings";

class App extends Component {
  state = {
    appName: "Let's workout",
    defaultRestTime: 30,
    exercises: [
      {
        exerciseName: "one",
        exerciseDuration: 30,
        restDuration: 10,
      },
      {
        exerciseName: "two",
        exerciseDuration: 30,
        restDuration: 10,
      },
      {
        exerciseName: "three",
        exerciseDuration: 60,
        restDuration: 10,
      },
      {
        exerciseName: "four",
        exerciseDuration: 30,
        restDuration: 10,
      },
    ],
    showExerciseAddForm: false,
  };

  showExerciseAddFormHandler = () => {
    const showExerciseAddForm = this.state.showExerciseAddForm;
    this.setState({ showExerciseAddForm: !showExerciseAddForm });
  };

  removeExercise = (name) => {
    const exercises = this.state.exercises.filter(
      (exercise) => exercise.exerciseName !== name
    );
    this.setState({ exercises });
  };

  addExerciseHandler = (e, data) => {
    const exercises = this.state.exercises;
    e.preventDefault();
    const exercise = { ...data, restDuration: this.state.defaultRestTime };
    exercises.push(exercise);
    this.setState({ exercises });
  };

  render() {
    return (
      <div className="App">
        <Nav
          {...this.props}
          appName={this.state.appName}
          showForm={this.showExerciseAddFormHandler}
        />

        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <HomePage
                {...props}
                showExerciseAddFormHandler={this.showExerciseAddFormHandler}
                exercises={this.state.exercises}
                removeExercise={this.removeExercise}
                addExerciseHandler={this.addExerciseHandler}
                showExerciseAddForm={this.state.showExerciseAddForm}
              />
            )}
          />
          <Route
            exact
            path="/settings"
            render={(props) => <SettingsPage {...props} />}
          />
          <Route path="/" render={() => <div>wrong path bro</div>} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
