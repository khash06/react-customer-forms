import React from "react";
import { TextField, Container } from "@material-ui/core";
import styles from "./newcustomerforminput.module.scss";

const NewCustomerFormInput = ({ handleChange, formDetails }) => {
  return (
    <Container maxWidth="sm">
      <form className={styles.formContainer}>
        <header>Applicant Info</header>
        <TextField
          required
          id="name"
          name="name"
          label="Name"
          value={formDetails.name}
          onChange={(e) => handleChange(e)}
        ></TextField>
        <TextField
          required
          id="address1"
          name="address1"
          label="Address"
          value={formDetails.address1}
          onChange={(e) => handleChange(e)}
        ></TextField>
        <TextField
          id="address2"
          name="address2"
          label="Address (cont.)"
          value={formDetails.address2}
          onChange={(e) => handleChange(e)}
        ></TextField>
        <TextField
          required
          id="city"
          name="city"
          label="City"
          value={formDetails.city}
          onChange={(e) => handleChange(e)}
        ></TextField>
        <TextField
          required
          id="state"
          name="state"
          label="State"
          value={formDetails.state}
          onChange={(e) => handleChange(e)}
        ></TextField>
        <TextField
          required
          id="zipCode"
          name="zipCode"
          label="Zip Code"
          value={formDetails.zipCode}
          onChange={(e) => handleChange(e)}
        ></TextField>
        <TextField
          required
          id="areaCode"
          name="areaCode"
          label="Area Code"
          value={formDetails.areaCode}
          onChange={(e) => handleChange(e)}
        ></TextField>
        <TextField
          required
          id="phoneNumber"
          name="phoneNumber"
          label="Phone Number"
          value={formDetails.phoneNumber}
          onChange={(e) => handleChange(e)}
        ></TextField>
      </form>
    </Container>
  );
};

export default NewCustomerFormInput;
