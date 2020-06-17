import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const SelectionButtons = (props) => {
    return (
        <div>
            <Button component={ Link } to="/newcustomer" variant="outlined">BEGIN APPLICATION</Button>
            <Button variant="outlined">UPLOAD DOCUMENTS</Button>
        </div>
    );
}

export default SelectionButtons