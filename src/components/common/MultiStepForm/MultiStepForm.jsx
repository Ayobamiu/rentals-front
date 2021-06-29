import React from "react";
import "./css/style.css";
import StepWizard from "react-step-wizard";
import MultiStep from "react-multistep";

const StepOne = (props) => {
  return (
    <div>
      <input type="text" placeholder="Name " />
      <div>
        <h2>Step {props.currentStep}</h2>
        <p>Total Steps: {props.totalSteps}</p>
        <p>Is Active: {props.isActive}</p>
        <p>
          <button onClick={props.previousStep}>Previous Step</button>
        </p>
        <p>
          <button onClick={props.nextStep}>Next Step</button>
        </p>
        <p>
          <button onClick={() => props.goToStep(2)}>Step 2</button>
        </p>
        <p>
          <button onClick={props.firstStep}>First Step</button>
        </p>
        <p>
          <button onClick={props.lastStep}>Last Step</button>
        </p>
      </div>
    </div>
  );
};
const StepTwo = (props) => {
  return (
    <div>
      <input type="text" placeholder="Name " />
      <div>
        <h2>Step {props.currentStep}</h2>
        <p>Total Steps: {props.totalSteps}</p>
        <p>Is Active: {props.isActive}</p>
        <p>
          <button onClick={props.previousStep}>Previous Step</button>
        </p>
        <p>
          <button onClick={props.nextStep}>Next Step</button>
        </p>
        <p>
          <button onClick={() => props.goToStep(2)}>Step 2</button>
        </p>
        <p>
          <button onClick={props.firstStep}>First Step</button>
        </p>
        <p>
          <button onClick={props.lastStep}>Last Step</button>
        </p>
      </div>
    </div>
  );
};
const StepThree = () => {
  return (
    <div>
      <button>Submit</button>
    </div>
  );
};
const steps = [
  { name: "StepOne", component: <StepOne /> },
  { name: "StepTwo", component: <StepTwo /> },
  { name: "StepThree", component: <StepThree /> },
];

const MultiStepForm = () => {
  return (
    <StepWizard>
      <StepOne />
      <StepTwo />
      <StepThree />
    </StepWizard>
  );
};

export default MultiStepForm;
