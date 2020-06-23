import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import VerifyUser from './VerifyUser';

const SelectionButtons = (props) => {
    const [show, setState] = useState(false);
    const showUploadComponent = () => {
        setState(true)
    };

    return (
        <div>
            <Button component={ Link } to={`/${props.customer}`} variant="outlined">BEGIN APPLICATION</Button>
            <Button variant="outlined" onClick={showUploadComponent}>UPLOAD DOCUMENTS</Button>
            {show ? <VerifyUser custType={props.customer} /> : null}
        </div>
    );
}

export default SelectionButtons