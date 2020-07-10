import React, { useState, useEffect }from 'react';
import Button from '@material-ui/core/Button';
import styles from './uploaddocuments.module.scss';
import PublishIcon from '@material-ui/icons/Publish';
import Chip from '@material-ui/core/Chip';
import FileUploadChipMulti from './FileUploadChipMulti';

const UploadDocuments = ({ type }) => {

    const [blcFile, setBlcFile] = useState([]);
    const [taxFile, setTaxFile] = useState([]);
    const [creditFile, setCreditFile] = useState([]);
    const [additionalFile, setAdditionalFile] = useState([]);

    const updateBLC = e => {
        setBlcFile([...blcFile, ...e.target.files]);
    }

    const updateTax = e => {
        setTaxFile([...taxFile, ...e.target.files])
    }

    const deleteFile = (type, file) => {
        if (type === 'tax') {
            setTaxFile(taxFile.filter(selectedFile => selectedFile !== file));
        } else if (type === 'credit') {
            setCreditFile(creditFile.filter(selectedFile => selectedFile !== file));
        } else if (type === 'additional') {
            setAdditionalFile(additionalFile.filter(selectedFile => selectedFile !== file));
        } else if (type === 'blc') {
            setBlcFile(blcFile.filter(selectedFile => selectedFile.name !== file[0].name));
        }
    };

    useEffect(() => {
        console.log(taxFile)
        console.log(blcFile)
    }, [taxFile, blcFile])

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
                <FileUploadChipMulti onDelete={(file) => deleteFile('credit', file)} files={creditFile}/>
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
                <FileUploadChipMulti onDelete={(file) => deleteFile('additional', file)} files={additionalFile}/>
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
            {blcFile.length > 0 ? <Chip label={blcFile[0].name} onDelete={() => deleteFile('blc', blcFile)} /> : null}
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
            <FileUploadChipMulti onDelete={(file) => deleteFile('tax', file)} files={taxFile}/>
            {type === 'existing_customer' 
                ? renderAdditional()
                : null
            }
        </div>
    );
}

export default UploadDocuments