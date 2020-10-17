import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

const INITIAL_STATE = {
  fileName: '',
  csvFileName: '',
  file: null,
};

class UploadForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.onFileNameChanged = this.onFileNameChanged.bind(this);
    this.onFileUploaded = this.onFileUploaded.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onFileNameChanged(e) {
    e.persist();
    this.setState(prevState => ({ ...prevState, fileName: e.target.value }));
  }

  onFileUploaded(file) {
    const csvFileName = file.name;
    this.setState(prevState => ({ ...prevState, file, csvFileName }));
  }

  submitForm(e) {
    const { onSubmit } = this.props;
    const { fileName, file } = this.state;
    e.preventDefault();
    onSubmit(fileName, file);
    this.setState(INITIAL_STATE);
  }

  render() {
    const { isLoading } = this.props;
    const { fileName, file, csvFileName } = this.state;
    return (
      <form onSubmit={(e) => this.submitForm(e)}>
        <div>
          <input
            className="form form-control"
            type="text"
            placeholder="File name"
            value={fileName}
            onChange={e => this.onFileNameChanged(e)}
          />
        </div>
        <div>
          <Dropzone onDrop={uploadedFiles => this.onFileUploaded(uploadedFiles[0])} accept=".csv">
            {({getRootProps, getInputProps}) => (
              <div className="dropzone-box" {...getRootProps()}>
                <div className="upload-icon">
                  <i className={`fa fa-${file ? 'check' : 'cloud-upload'}`} />
                </div>
                <div className="upload-text">
                  <span>{csvFileName ? csvFileName : 'Load CSV File'}</span>
                </div>
                <input {...getInputProps()} />
              </div>
            )}
          </Dropzone>
        </div>
        <div>
          <button
            className="btn btn-primary upload-button"
            type="submit"
            disabled={!fileName || !file || isLoading}
          >
            {isLoading ? <i className="fa fa-circle-o-notch fa-spin" /> : 'Upload'}
          </button>
        </div>
      </form>
    )
  }
}

UploadForm.propTypes = {
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool
};

export default UploadForm;