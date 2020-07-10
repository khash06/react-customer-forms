import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom'
import VerifyUser from './VerifyUser';
import styles from './selectionbuttons.module.scss';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
};

const SelectionButtons = (props) => {
    console.log(props)
    const [show, showFields] = useState(false);
    const [showError, setError] = useState(false);

    const showUploadComponent = () => {
        if (props.customer === '') {
            setError(true)
        } else {
            setError(false)
            showFields(true)
        }   
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        } else {
            setError(false)
        }
    }

    return (
        <div className={styles.selectionButtonContainer}>
            <div className={styles.buttonContainer}>
                <Button component={ Link } to={`/${props.customer}`} variant="outlined">BEGIN APPLICATION</Button>
                <Button variant="outlined" onClick={showUploadComponent}>UPLOAD DOCUMENTS</Button>
            </div>
            <div>
                <Snackbar open={showError} autoHideDuration={5000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error">
                        Please select Customer Type
                    </Alert>
                </Snackbar>
            </div>
            <div>
                {show ? <VerifyUser custType={props.customer} /> : null}
            </div>
        </div>
    );
}

export default SelectionButtons