import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const VerifyUser = ({ custType }) => {
    console.log(custType)

    const [cust, setState] = useState('');
    const [inputs, setValues] = useState({
        custNumber: null,
        zipCode: null
    });
   
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

    return (
        <div>
            <TextField label={`Enter your ${cust}`} onChange={updateNumber} name="number"></TextField> AND <TextField label="Enter Zip Code" onChange={updateNumber} name="zip"></TextField>
            <Button variant="outlined">Search</Button>
        </div>
    );
}

export default VerifyUser