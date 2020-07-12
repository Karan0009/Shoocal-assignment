import React, { Component, Fragment } from "react";
import "./workouts.css";

import ExerciseCard from "../exerciseCard/exerciseCard";

class Workouts extends Component {
  render() {
    return (
      <div className={`workouts ${this.props.className}`}>
        {this.props.exercises.map((exercise, index) => (
          <ExerciseCard
            key={index}
            exerciseData={exercise}
            removeExercise={this.props.removeExercise}
          />
        ))}
      </div>
    );
  }
}

export default Workouts;
