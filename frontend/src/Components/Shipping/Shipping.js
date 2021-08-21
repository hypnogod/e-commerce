import React, { useState, useEffect } from "react";
import { Stepper, Step, StepLabel, Paper } from "@material-ui/core";
import ShipLocation from "./Steps/ShipLocation";
import Payment from "./Steps/Payment";
import StepsConfirm from "./Steps/StepsConfirm";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./Shipping.css";

const initialValues = {
  firstName: "",
  lastName: "",
  city: "",
  country: "",
  State: "",
  AddressLine1: "",
  AddressLine2: "",
  PostalCode: "",
  PaymentMethod: "",
};

const steps = ["First Step", "Second Step", "Confirmation"];

function Shipping() {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);

  const handleNext = () => setActiveStep((prev) => prev + 1); //next button
  const prevButton = () => setActiveStep((prev) => prev - 1); // previous button
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <ShipLocation
            handleNext={handleNext}
            handleChange={handleChange}
            formvalues={formValues}
          />
        );
      case 1:
        return (
          <Payment
            prevButton={prevButton}
            handleNext={handleNext}
            handleChange={handleChange}
            formvalues={formValues}
          />
        );
      case 2:
        return (
          <StepsConfirm
            prevButton={prevButton}
            formValues={formValues}
            handleNext={handleNext}
          />
        );
    }
  }
  const stateRedu = useSelector((state) => state);
  const { userInfo } = stateRedu.userSignIn;
  const { cartItems } = stateRedu.cart;
  const history = useHistory();

  useEffect(() => {
    if (!userInfo || cartItems.length <= 0) {
      history.push("/");
    }
  }, [history, userInfo, cartItems]);
  return (
    <div className="logShipPayoutStCont">
      {activeStep === steps.length ? (
        <Paper className="lonShipSecondCont">
          <p>Done</p>
        </Paper>
      ) : (
        <Paper className="lonShipSecondCont">
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((i) => (
              <Step key={i}>
                <StepLabel></StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            <div>{getStepContent(activeStep)}</div>
          </>
        </Paper>
      )}
    </div>
  );
}

export default Shipping;
