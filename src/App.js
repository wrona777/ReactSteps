import React, { useState } from "react";
import Step from './components/Step';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialStepsArray = [
  { id: 1, StepStatus: "", StepTitle: "Przygotuj skladniki" },
  { id: 2, StepStatus: "", StepTitle: "Zamieszaj" },
  { id: 3, StepStatus: "", StepTitle: "Ugotuj" },
  { id: 4, StepStatus: "", StepTitle: "Gotowe" },
];

const App = () => {
  const [completedSteps, setCompletedSteps] = useState([]);
  const [stepsArray, setStepsArray] = useState(initialStepsArray);

  const handleCofnij = () => {
    if (completedSteps.length > 0) {
      console.log(completedSteps);
      const lastCompletedStep = completedSteps[completedSteps.length - 1];
      const updatedStepsArray = stepsArray.map((step) => {
        if (step.id === lastCompletedStep) {
          return { ...step, StepStatus: "" };
        }
        return step;
      });
      setCompletedSteps(completedSteps.slice(0, -1));
      setStepsArray(updatedStepsArray);
    }
  };

  const handleDalej = () => {
    const incompleteSteps = stepsArray.filter((step) => !completedSteps.includes(step.id));

    if (incompleteSteps.length > 0) {
      const nextStep = incompleteSteps[0];
      const updatedStepsArray = stepsArray.map((step) => {
        if (step.id === nextStep.id) {
          return { ...step, StepStatus: "completed" };
        }
        return step;
      });
      setCompletedSteps([...completedSteps, nextStep.id]);
      setStepsArray(updatedStepsArray);
    }
  };

  return (
    <div className="main_container">
      <div className="container">
        <div className="card-body pt-5">
          <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
            {stepsArray.map((step) => (
              <Step
                key={step.id}
                StepStatus={step.StepStatus}
                id={step.id}
                StepTitle={step.StepTitle}
              />
            ))}
          </div>
          <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
            <button className="btn btn-primary" type="button" onClick={handleCofnij}>
              Cofnij
            </button>
            <button className="btn btn-primary" type="button" onClick={handleDalej}>
              Dalej
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
