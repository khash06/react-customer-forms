import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const Review = () => {
    let location = useLocation();

    let history = useHistory();

    const [form, setState] = useState({});

    useEffect(() => {
        setState(location.state.input);
    }, [location]);

    const editForm = () => {
        history.push({
            pathname: "/new_customer",
            state: { 
                details: form,
                editPage: true 
            }
        });
    };

    return (
        <main>
            <Button onClick={editForm} variant="outlined">Edit Application</Button>
            <Container maxWidth="md">
                <header>Application for Wholesale Purchasing Account - Review</header>
                <section>
                    <p>Please review your data before submitting</p>
                </section>
                <section>
                    <header>Applicant Info</header>
                    <article>
                        <p>Name: {form.name}</p>
                        <p>Address: {form.address1}</p>
                        <p>Address(cont.): {form.address2}</p>
                        <p>City: {form.city}</p>
                        <p>State: {form.state}</p>
                        <p>Zip Code: {form.zipCode}</p>
                        <p>Phone Area Code: {form.areaCode}</p>
                        <p>Phone Number: {form.phoneNumber}</p>
                    </article>
                </section>
            </Container>
        </main>
    );
}

export default Review