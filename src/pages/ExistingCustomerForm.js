import React, { useState } from 'react';
import NewField from '../components/NewField';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import styles from './existingcustomerform.module.scss';

const ExistingCustomerForm = () => {
    const [state, setState] = useState({
        nameChangeToggle: false
    });

const toggleSwitch = event => {
    console.log(event.target.checked)
    setState({
        ...state,
        [event.target.name]: event.target.checked
    });
}

    return (
        <Container maxWidth="md">
            <header>Credit Application</header>
            <section>
                <form className={styles.formContainer}>
                    <header>Customer Info</header>
                    <TextField 
                        required 
                        id="customerNumber" 
                        name="customerNumber" 
                        label="Customer Number" 
                        helperText="Note: Please provide customer number provided during sign-up">
                    </TextField>
                    <header>Did you change your Business Name in the last few yers for the same Tax ID number?</header>
                    <Grid component="label" container alignItems="center" spacing={1}>
                        <Grid item>No</Grid>
                        <Grid item>
                        <Switch 
                            checked={state.nameChangeToggle}
                            onChange={toggleSwitch}
                            name="nameChangeToggle"
                        />
                        </Grid>
                        <Grid item>Yes</Grid>
                    </Grid>
                    {state.nameChangeToggle ? <NewField /> : null}
                </form>
            </section>
        </Container>
    );
}

export default ExistingCustomerForm