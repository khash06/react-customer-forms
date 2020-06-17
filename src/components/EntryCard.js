import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
import styles from './entrycard.module.scss';

import SelectionButtons from './SelectionButtons';

const EntryCard = () => {
    const [country, setCountry] = useState('united_states');
    const [customer, setCustomerType] = useState('');

    const countryChange = (event) => {
        setCountry(event.target.value);
    };

    const customerChange = (event) => {
        setCustomerType(event.target.value)
    };

    const currentYear = new Date().getFullYear().toString();

    return (
        <Container maxWidth="md">
            <div className={styles.cardContainer}>
                <header className={styles.header}>Application for Wholesale Purchasing Account</header>
                <section>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Where are you applying from?</FormLabel>
                        <RadioGroup aria-label="country" name="countryName" value={country} onChange={countryChange} row>
                            <FormControlLabel value="united_states" control={<Radio />} label="UNITED STATES" />
                            <FormControlLabel disabled value="canada" control={<Radio />} label="CANADA" />
                        </RadioGroup>
                        <RadioGroup aria-label="customer" name="customerType" value={customer} onChange={customerChange} row>
                            <FormControlLabel value="new_customer" control={<Radio />} label="NEW CUSTOMER"></FormControlLabel>
                            <FormControlLabel value="existing_customer" control={<Radio />} label="EXISTING CUSTOMER"></FormControlLabel>
                        </RadioGroup>
                    </FormControl>
                </section>
                <section>
                    <p>To make this process faster, having the following documents will help:</p>
                    <ul>
                        <li>Business License Certificate (mandatory)</li>
                        <li>Disposal Fee Exemption (if applicable)</li>
                        <li>State Specific Tax Certificate (if applicable)</li>
                    </ul>
                </section>
                <section>
                    <SelectionButtons customer={customer} country={country}/>
                </section>
                <footer>© {currentYear} Keishi's Tires</footer>
            </div>
        </Container>
    );
}

export default EntryCard