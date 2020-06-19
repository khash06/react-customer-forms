import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const NewField = () => {
    const [state, setState] = useState('');

    const newInput = event => {
        setState(event.target.value)
    }

    return (
        <TextField label="New Legal Business Name" onChange={newInput}></TextField>
    );
}

export default NewField