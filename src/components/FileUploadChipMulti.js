import React from 'react';
import Chip from '@material-ui/core/Chip';

const FileUploadChipMulti = ({ onDelete, files }) => {
    return (
        files.map((file, index) => {
            return (
                <li key={index}>
                    <Chip label={file.name} onDelete={() => onDelete(file)} />
                </li>
            );
        })
    );    
}

export default FileUploadChipMulti