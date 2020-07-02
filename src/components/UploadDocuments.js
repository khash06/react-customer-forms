import React, { useState, useEffect }from 'react';
import Button from '@material-ui/core/Button';
import styles from './uploaddocuments.module.scss';
import PublishIcon from '@material-ui/icons/Publish';
import Chip from '@material-ui/core/Chip';

const UploadDocuments = ({ type }) => {

    const [blcFile, setBlcFile] = useState('');
    const [blcFileName, setBlcFileName] = useState('');
    const [taxFile, setTaxFile] = useState([]);
    const [creditFile, setCreditFile] = useState('');
    const [additionalFile, setAdditionalFile] = useState('');

    const updateBLC = e => {
        setBlcFile(e.target.files[0]);
        setBlcFileName(e.target.files[0].name);
    }

    const updateTax = e => {
        setTaxFile([...taxFile, ...e.target.files])
    }

    useEffect(() => {
        console.log(taxFile)
    }, [taxFile])

    const handleDelete = (e) => {
        console.log('delete me', e)
    }

    const renderAdditional = () => {
        return (
            <div>
                <div className={styles.uploadField}>
                    <span>Credit Documents (max upload 4 files)</span>
                    <input
                        className={styles.input}
                        name="credit" 
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
                <div className={styles.uploadField}>
                    <span>Additional Documents (max upload 4 files)</span>
                    <input
                        className={styles.input}
                        name="additional" 
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
            <div className={styles.uploadField}>
                <span>Business License Certificates</span>
                <input
                    className={styles.input}
                    name="blc"
                    onChange={updateBLC} 
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
            <div className={styles.uploadField}>
                <span>Tax Documents (max upload 4 files)</span>
                <input
                    className={styles.input}
                    onChange={updateTax}
                    name="tax" 
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
            {taxFile.map((file, index) => {
                return(
                    <li key={index}>
                        <Chip label={file.name} onDelete={handleDelete}/>
                    </li>
                    
                )
            })}
            {type === 'existing_customer' 
                ? renderAdditional()
                : null
            }
        </div>
    );
}

export default UploadDocuments