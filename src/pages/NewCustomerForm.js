import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Container from '@material-ui/core/Container';
import styles from './newcustomerform.module.scss';

const NewCustomerForm = () => {
    const [name, setName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [areaCode, setAreaCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const nameChange = (event) => {
        setName(event.target.value);
    };

    const address1Change = (event) => {
        setAddress1(event.target.value);
    };

    const address2Change = (event) => {
        setAddress2(event.target.value);
    };

    const zipCodeChange = (event) => {
        setZipCode(event.target.value);
    };

    const areaCodeChange = (event) => {
        setAreaCode(event.target.value);
    };

    const phoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    return (
        <Container maxWidth="sm">
            <form className={styles.formContainer}>
                <FormControl>
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <Input required id="name" value={name} onChange={nameChange} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="address1">Address</InputLabel>
                    <Input required id="address1" value={address1} onChange={address1Change} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="name">Address (cont.)</InputLabel>
                    <Input id="address2" value={address2} onChange={address2Change} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="zip">Zip Code</InputLabel>
                    <Input required id="zipCode" value={zipCode} onChange={zipCodeChange} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="areaCode">Phone Area Code</InputLabel>
                    <Input required id="areaCode" value={areaCode} onChange={areaCodeChange} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
                    <Input required id="phoneNumber" value={phoneNumber} onChange={phoneNumberChange} />
                </FormControl>
            </form>
        </Container>
    );
}

export default NewCustomerForm