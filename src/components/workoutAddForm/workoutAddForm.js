import React, { Component } from "react";
import "./workoutAddForm.css";

import Input from "../commonComponents/input/input";
import Button from "../commonComponents/Button/Button";

class workoutAddForm extends Component {
  state = {
    workoutInfoForm: {
      name: {
        value: "",
        valid: false,
        touched: false,
      },
      workoutTimeSetting: {
        value: "default",
        valid: true,
        touched: false,
      },
      workoutTime: {
        value: "",
        valid: false,
        touched: false,
      },
    },
    showSetTimer: false,
  };

  inputChangeHandler = (e) => {
    const workoutInfoForm = this.state.workoutInfoForm;
    let showSetTimer = this.state.showSetTimer;
    const inputId = e.target.id;
    if (inputId === "workoutTimeSetting") {
      if (workoutInfoForm[inputId].value === "custom") showSetTimer = false;
      else showSetTimer = true;
    }
    workoutInfoForm[inputId] = {
      ...workoutInfoForm[inputId],
      value: e.target.value,
    };

    this.setState({ workoutInfoForm, showSetTimer });
  };

  render() {
    return (
      <form
        className="workoutAddForm_box"
        onSubmit={(e) =>
          this.props.workoutSubmitHandler(e, {
            name: this.state.workoutInfoForm.name.value,
            workoutTimeSetting: this.state.workoutInfoForm.workoutTimeSetting
              .value,
            workoutTime: this.state.workoutInfoForm.workoutTime.value,
          })
        }
      >
        <Input
          type="text"
          classes="workout_name_input"
          placeholder="workout name"
          id="name"
          value={this.state.workoutInfoForm["name"].value}
          onChange={this.inputChangeHandler}
        />
        <Input
          type="select"
          options={["default", "custom"]}
          placeholder="workout time"
          classes="workout_time_select"
          id="workoutTimeSetting"
          value={this.state.workoutInfoForm["workoutTimeSetting"].value}
          onChange={this.inputChangeHandler}
        />
        {this.state.showSetTimer && (
          <Input
            type="number"
            classes="workout_time_input"
            placeholder="workout time(in secs)"
            id="workoutTime"
            value={this.state.workoutInfoForm["workoutTime"].value}
            onChange={this.inputChangeHandler}
          />
        )}
        <Button type="submit" classes="workout_submit_btn">
          Submit
        </Button>
      </form>
    );
  }
}

export default workoutAddForm;
