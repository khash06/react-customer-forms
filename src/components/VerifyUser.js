import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import UploadDocumets from './UploadDocuments';
import styles from './verifyuser.module.scss';

const VerifyUser = ({ custType }) => {
    console.log(custType)

    const [cust, setState] = useState('');
    const [inputs, setValues] = useState({
        custNumber: null,
        zipCode: null
    });
    const [verified, setVerification] = useState(false);
   
    useEffect(() => {
        if (custType === 'new_customer') {
            setState('Application ID')
        } else {
            setState('Customer Number')
        }
    }, [custType]);

    const updateNumber = e => {
        setValues({
            ...inputs,
            [e.target.name]: e.target.value
        })
    };

    const verifyUser = () => {
        //add backend search for new or existing customer based on custType
        setVerification(true)
    }

    return (
        <div>
            <div className={styles.verifyContainer}>
                <TextField label={`Enter your ${cust}`} onChange={updateNumber} name="custNumber"></TextField> 
                <span>AND</span>
                <TextField label="Enter Zip Code" onChange={updateNumber} name="zipCode"></TextField>
                <Button variant="outlined" onClick={verifyUser}>Search</Button>
                
            </div>
            <div>
                {verified ? <UploadDocumets type={custType}/> : null}
            </div>
        </div>
    );
}

export default VerifyUser