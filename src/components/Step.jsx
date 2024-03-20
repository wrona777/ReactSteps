import React from "react";
import "../App.css";

const Step = ({ StepStatus, id, StepTitle }) => {

  return (
    <div className={`step ${StepStatus}`}>
    <div>{id}</div>
      <h4 className={"step-title"}>{StepTitle}</h4>
    </div>
  );
};

export default Step;

