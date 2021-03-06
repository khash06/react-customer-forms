import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import NewCustomerFormInput from "./NewCustomerFormInput";
import Review from "./Review";
import styles from "./newcustomerform.module.scss";

const NewCustomerForm = () => {
  const [form, setState] = useState({
    currentStep: 1,
    name: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    areaCode: "",
    phoneNumber: "",
  });

  const toNext = () => {
    let currentStep = form.currentStep;
    currentStep = currentStep === 1 ? 2 : currentStep + 0;
    setState({
      ...form,
      currentStep: currentStep,
    });
    console.log(form);
  };

  const toPrevious = () => {
    let currentStep = form.currentStep;
    currentStep = currentStep === 1 ? currentStep - 0 : currentStep - 1;
    setState({
      ...form,
      currentStep: currentStep,
    });
  };

  const FormNavButton = () => {
    let currentStep = form.currentStep;
    if (currentStep < 2) {
      return (
        <Button
          endIcon={<ArrowForwardIosIcon />}
          onClick={toNext}
          className={styles.nextButton}
        >
          Next
        </Button>
      );
    } else {
      return (
        <Button
          startIcon={<ArrowBackIosIcon />}
          onClick={toPrevious}
          className="nextButton"
        >
          Back
        </Button>
      );
    }
  };

  const updateField = (e) => {
    console.log(e.target.value);
    setState({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", e);
    //send data to server/backend
  };

  return (
    <div className={styles.formContainer}>
      {form.currentStep === 1 ? (
        <NewCustomerFormInput
          handleChange={(e) => updateField(e)}
          formDetails={form}
        />
      ) : (
        <Review formDetails={form} handleSubmit={(e) => handleSubmit(e)} />
      )}
      <FormNavButton />
    </div>
  );
};

export default NewCustomerForm;
