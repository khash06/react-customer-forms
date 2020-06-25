import React, { useState }from 'react';
import Button from '@material-ui/core/Button';
import styles from './uploaddocuments.module.scss';
import PublishIcon from '@material-ui/icons/Publish';

const UploadDocuments = ({ type }) => {

    const [files, setFileUploads] = useState({
        blc: [],
        tax: [],
        credit: [],
        additional: []
    });

    const updateField = e => {
        console.log(e.target.value)
    }

    const renderAdditional = () => {
        return (
            <div>
                <div>
                    <span>Credit Documents (max upload 4 files)</span>
                    <input
                        className={styles.input} 
                        type="file" 
                        id="upload-button-credit"
                        multiple 
                        accept="image/png,image/jpeg,image/tiff,image/bmp,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,
                        application/msword,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
                    </input>
                    <label htmlFor="upload-button-credit">
                        <Button startIcon={<PublishIcon />} component="span">
                            Upload File
                        </Button>
                    </label>
                </div>
                <div>
                    <span>Additional Documents (max upload 4 files)</span>
                    <input
                        className={styles.input} 
                        type="file" 
                        id="upload-button-additional"
                        multiple 
                        accept="image/png,image/jpeg,image/tiff,image/bmp,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,
                        application/msword,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
                    </input>
                    <label htmlFor="upload-button-additional">
                        <Button startIcon={<PublishIcon />} component="span">
                            Upload File
                        </Button>
                    </label>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div>
                <span>Business License Certificates</span>
                <input
                    className={styles.input} 
                    type="file" 
                    id="upload-button-blc" 
                    accept="image/png,image/jpeg,image/tiff,image/bmp,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,
                    application/msword,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
                </input>
                <label htmlFor="upload-button-blc">
                    <Button startIcon={<PublishIcon />} component="span">
                        Upload File
                    </Button>
                </label>
            </div>
            <div>
                <span>Tax Documents (max upload 4 files)</span>
                <input
                    className={styles.input} 
                    type="file" 
                    id="upload-button-tax"
                    multiple 
                    accept="image/png,image/jpeg,image/tiff,image/bmp,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,
                    application/msword,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
                </input>
                <label htmlFor="upload-button-tax">
                    <Button startIcon={<PublishIcon />} component="span">
                        Upload File
                    </Button>
                </label>
            </div>
            {type === 'existing_customer' 
                ? renderAdditional()
                : null
            }
        </div>
    );
}

export default UploadDocuments