import React, { useState, useEffect } from "react";
import "./timer.css";

import Button from "../commonComponents/Button/Button";

const Timer = (props) => {
  const [totalTime, setTotalTime] = useState();

  useEffect(() => {
    let time = 0;
    setTotalTime(0);
    for (let i of props.exercises) {
      time += Number(i.exerciseDuration);
    }
    setTotalTime(time);
    console.log(totalTime);
  });

  return (
    <div className="timer_container">
      {props.showTotal && <h3>Total:</h3>}
      <p className="timer">
        {isNaN(totalTime) ? "00" : Math.trunc(totalTime / 60)}:
        {isNaN(totalTime) ? "00" : totalTime % 60}
      </p>
    </div>
  );
};

export default Timer;
