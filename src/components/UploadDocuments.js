import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import styles from "./uploaddocuments.module.scss";
import PublishIcon from "@material-ui/icons/Publish";
import Chip from "@material-ui/core/Chip";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import FileUploadChipMulti from "./FileUploadChipMulti";
import {
  FILE_FORMAT_ERROR,
  FILE_COUNT_ERROR,
  FILE_SIZE_ERROR,
  FILE_LIMIT_ERROR,
  FILE_SIZE_LIMIT,
  FILE_FORMATS_ALLOWED,
} from "../shared/constants.util";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const UploadDocuments = ({ type }) => {
  const [blcFile, setBlcFile] = useState([]);
  const [taxFile, setTaxFile] = useState([]);
  const [creditFile, setCreditFile] = useState([]);
  const [additionalFile, setAdditionalFile] = useState([]);
  const [error, setError] = useState(null);

  const updateBLC = (e) => {
    // console.log(blcFile)
    // if (fileSanityCheck(files, false) && blcFile.length <= 1) {
    //     setBlcFile([...blcFile, ...e.target.files]);
    // } else {
    //     setError(true)
    // }
    setBlcFile([...blcFile, ...e.target.files]);
  };

  const updateTax = (e) => {
    const files = [...e.target.files];
    const currentLength = taxFile.length;
    const totalLength = files.length + currentLength;
    if (fileSanityCheck(files, true) && totalLength < 5) {
      setTaxFile([...taxFile, ...e.target.files]);
    } else {
      setError(true);
    }
  };

  const deleteFile = (type, file) => {
    if (type === "tax") {
      setTaxFile(taxFile.filter((selectedFile) => selectedFile !== file));
    } else if (type === "credit") {
      setCreditFile(creditFile.filter((selectedFile) => selectedFile !== file));
    } else if (type === "additional") {
      setAdditionalFile(
        additionalFile.filter((selectedFile) => selectedFile !== file)
      );
    } else if (type === "blc") {
      setBlcFile(
        blcFile.filter((selectedFile) => selectedFile.name !== file[0].name)
      );
    }
  };

  useEffect(() => {
    console.log(taxFile);
    console.log(blcFile);
  }, [taxFile, blcFile]);

  const fileSanityCheck = (files, allowMultiple) => {
    let type = false;
    let size = false;

    if (
      (allowMultiple && files.length > 4) ||
      (!allowMultiple && files.length > 1)
    ) {
      return false;
    }

    files.forEach((file) => {
      type = FILE_FORMATS_ALLOWED.includes(file.type);
      size = file.size < FILE_SIZE_LIMIT;
      if (!type) {
        return type;
      } else if (!size) {
        return size;
      }
    });
    if (type && size) {
      return true;
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    } else {
      setError(false);
    }
  };

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
                        application/msword,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          ></input>
          <label htmlFor="upload-button-credit">
            <Button startIcon={<PublishIcon />} component="span">
              Upload File
            </Button>
          </label>
        </div>
        <FileUploadChipMulti
          onDelete={(file) => deleteFile("credit", file)}
          files={creditFile}
        />
        <div className={styles.uploadField}>
          <span>Additional Documents (max upload 4 files)</span>
          <input
            className={styles.input}
            name="additional"
            type="file"
            id="upload-button-additional"
            multiple
            accept="image/png,image/jpeg,image/tiff,image/bmp,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,
                        application/msword,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          ></input>
          <label htmlFor="upload-button-additional">
            <Button startIcon={<PublishIcon />} component="span">
              Upload File
            </Button>
          </label>
        </div>
        <FileUploadChipMulti
          onDelete={(file) => deleteFile("additional", file)}
          files={additionalFile}
        />
      </div>
    );
  };

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
                    application/msword,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        ></input>
        <label htmlFor="upload-button-blc">
          <Button startIcon={<PublishIcon />} component="span">
            Upload File
          </Button>
        </label>
      </div>
      {blcFile.length > 0 ? (
        <Chip
          label={blcFile[0].name}
          onDelete={() => deleteFile("blc", blcFile)}
        />
      ) : null}
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
                    application/msword,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        ></input>
        <label htmlFor="upload-button-tax">
          <Button startIcon={<PublishIcon />} component="span">
            Upload File
          </Button>
        </label>
      </div>
      <div>
        {error ? (
          //TODO: extract out to new component
          <Snackbar open={error} autoHideDuration={5000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
              {FILE_COUNT_ERROR}
            </Alert>
          </Snackbar>
        ) : null}
      </div>
      <FileUploadChipMulti
        onDelete={(file) => deleteFile("tax", file)}
        files={taxFile}
      />
      {type === "existing_customer" ? renderAdditional() : null}
    </div>
  );
};

export default UploadDocuments;
