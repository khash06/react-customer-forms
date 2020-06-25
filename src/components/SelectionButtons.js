import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import VerifyUser from './VerifyUser';
import styles from './selectionbuttons.module.scss';

const SelectionButtons = (props) => {
    const [show, setState] = useState(false);
    const showUploadComponent = () => {
        setState(true)
    };

    return (
        <div className={styles.selectionButtonContainer}>
            <div className={styles.buttonContainer}>
                <Button component={ Link } to={`/${props.customer}`} variant="outlined">BEGIN APPLICATION</Button>
                <Button variant="outlined" onClick={showUploadComponent}>UPLOAD DOCUMENTS</Button>
            </div>
            <div>
                {show ? <VerifyUser custType={props.customer} /> : null}
            </div>
        </div>
    );
}

export default SelectionButtons