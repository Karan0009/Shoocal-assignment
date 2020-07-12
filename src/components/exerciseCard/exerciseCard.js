import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./exerciseCard.css";

import Button from "../commonComponents/Button/Button";

const Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 300px;
  padding: 0.5rem;
  margin: 1.5rem 0;
  border-radius: 5px;
  background-color: #ccfff6;
  display: grid;
  grid-template-columns: auto;
  grid-teplate-rows: 50px auto;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
    0 9px 46px 8px rgba(0, 0, 0, 0.025), 0 11px 15px -7px rgba(0, 0, 0, 0.025);
`;

const ExerciseCard = (props) => {
  return (
    <>
      <Card className="card">
        <Button
          type="button"
          classes="btn_removeExercise"
          onClick={() => props.removeExercise(props.exerciseData.exerciseName)}
        >
          <i class="fa fa-times" aria-hidden="true">
            remove
          </i>
        </Button>
        <div className="excerciseCard_info">
          <div className="circle">
            <p className="exerciseCard_time">
              {props.exerciseData.exerciseDuration}s
            </p>
          </div>
          <p className="exerciseCard_name">{props.exerciseData.exerciseName}</p>

          <p className="exerciseCard_restTime">
            rest duration:
            {props.exerciseData.restDuration}s
          </p>
        </div>
      </Card>
    </>
  );
};

export default ExerciseCard;
