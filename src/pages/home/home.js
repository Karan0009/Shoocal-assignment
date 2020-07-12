import React, { Component } from "react";
import "./home.css";

import Input from "../../components/commonComponents/input/input";
import Button from "../../components/commonComponents/Button/Button";
import Workouts from "../../components/workouts/workouts";
import Timer from "../../components/timer/timer";

class HomePage extends Component {
  state = {
    exerciseName: "",
    exerciseDuration: 30,
  };

  inputChangeHandler = (e) => {
    if (e.target.id === "exerciseDuration") {
      if (isNaN(e.target.value)) return;
    }
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <>
        <div className="main_wrapper">
          <div className="ad_wrapper">ad here</div>
          <div className="main">
            {this.props.showExerciseAddForm && (
              <div className="exercise_info">
                <form
                  className="exercise_info_form"
                  onSubmit={(e) =>
                    this.props.addExerciseHandler(e, {
                      exerciseName: this.state.exerciseName,
                      exerciseDuration: this.state.exerciseDuration,
                    })
                  }
                >
                  <input
                    type="text"
                    id="exerciseName"
                    placeholder="Enter name"
                    classes="exercise_input_name"
                    value={this.state.exerciseName}
                    onChange={this.inputChangeHandler}
                  />
                  <input
                    type="text"
                    id="exerciseDuration"
                    placeholder="Exercise duration(in secs)"
                    classes="exercise_input_time"
                    value={this.state.exerciseDuration}
                    onChange={this.inputChangeHandler}
                  />
                  <Button type="submit" classes="btn_exercise_info_submit">
                    Add
                  </Button>
                </form>
                <Button
                  type="button"
                  classes="btn_exercise_info_close"
                  onClick={this.props.showExerciseAddFormHandler}
                >
                  <i class="fa fa-times" aria-hidden="true">
                    close
                  </i>
                </Button>
              </div>
            )}
            <Timer exercises={this.props.exercises} showTotal />
            <div className="interact_buttons">
              <Button
                commonStyles
                buttonAnimation
                type="button"
                classes="btn_interact"
              >
                Start
              </Button>
              <Button
                commonStyles
                buttonAnimation
                type="button"
                classes="btn_interact"
              >
                Restart
              </Button>
            </div>
            <Workouts
              className="workouts_home"
              exercises={this.props.exercises}
              removeExercise={this.props.removeExercise}
            />
          </div>
          <div className="ad_wrapper">ad here</div>
        </div>
      </>
    );
  }
}

export default HomePage;
