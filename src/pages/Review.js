import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const Review = ({ formDetails }) => {
  console.log(formDetails);

  return (
    <main>
      <Container maxWidth="md">
        <header>Application for Wholesale Purchasing Account - Review</header>
        <section>
          <p>Please review your data before submitting</p>
        </section>
        <section>
          <header>Applicant Info</header>
          <article>
            <p>Name: {formDetails.name}</p>
            <p>Address: {formDetails.address1}</p>
            <p>Address(cont.): {formDetails.address2}</p>
            <p>City: {formDetails.city}</p>
            <p>State: {formDetails.state}</p>
            <p>Zip Code: {formDetails.zipCode}</p>
            <p>Phone Area Code: {formDetails.areaCode}</p>
            <p>Phone Number: {formDetails.phoneNumber}</p>
          </article>
        </section>
        <Button>Submit</Button>
      </Container>
    </main>
  );
};

export default Review;
