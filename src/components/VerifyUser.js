import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import UploadDocumets from "./UploadDocuments";
import styles from "./verifyuser.module.scss";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const VerifyUser = ({ custType }) => {
  console.log(custType);

  const [cust, setState] = useState("");
  const [inputs, setValues] = useState({
    custNumber: null,
    zipCode: null,
  });

  const [doesNotExist, checkUser] = useState(null);
  const [verified, setVerification] = useState(null);

  useEffect(() => {
    custType === "new_customer"
      ? setState("Application ID")
      : setState("Customer Number");
    setVerification(false);
    handleClose();
  }, [custType]);

  const updateNumber = (e) => {
    setValues({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const verifyUser = () => {
    //add backend search for new or existing customer based on custType
    checkUser(false);
    setVerification(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    } else {
      checkUser(null);
    }
  };

  return (
    <div>
      <div className={styles.verifyContainer}>
        <TextField
          label={`Enter your ${cust}`}
          onChange={updateNumber}
          name="custNumber"
          style={{ width: 300 }}
        ></TextField>
        <span>AND</span>
        <TextField
          label="Enter Zip Code"
          onChange={updateNumber}
          name="zipCode"
        ></TextField>
        <Button variant="outlined" onClick={verifyUser}>
          Search
        </Button>
      </div>
      <div>
        <Snackbar
          open={doesNotExist}
          autoHideDuration={5000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error">
            The combination provided for {cust} / ZipCode doesn't match our
            system. Please try again.
          </Alert>
        </Snackbar>
      </div>
      <div>{verified ? <UploadDocumets type={custType} /> : null}</div>
    </div>
  );
};

export default VerifyUser;
