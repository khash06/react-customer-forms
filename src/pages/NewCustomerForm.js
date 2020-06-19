import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './newcustomerform.module.scss';

const NewCustomerForm = () => {

    let history = useHistory();

    let location = useLocation();

    const [form, setState] = useState({
        name: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipCode: null,
        areaCode: null,
        phoneNumber: null,
    });

    const updateField = e => {
        console.log(e.target.value)
        setState({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = () => {
        history.push({
            pathname: "/review",
            state: { 
                input: form,
                editPage: false
            }
        });
    };  

    
    

    return (
        <Container maxWidth="sm">
            <form className={styles.formContainer}>
                <header>Applicant Info</header>
                <TextField required id="name" name="name" label="Name" onChange={updateField}></TextField>
                <TextField required id="address1" name="address1" label="Address" onChange={updateField}></TextField>
                <TextField id="address2" name="address2" label="Address (cont.)" onChange={updateField}></TextField>
                <TextField required id="city" name="city" label="City" onChange={updateField}></TextField>
                <TextField required id="state" name="state" label="State" onChange={updateField}></TextField>
                <TextField required id="zipCode" name="zipCode" label="Zip Code" onChange={updateField}></TextField>
                <TextField required id="areaCode" name="areaCode" label="Area Code" onChange={updateField}></TextField>
                <TextField required id="phoneNumber" name="phoneNumber" label="Phone Number" onChange={updateField}></TextField>
                <Button onClick={onSubmit} variant="outlined">Review Application</Button>
            </form>
        </Container>
    );
}

export default NewCustomerForm