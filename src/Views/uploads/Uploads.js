import React from 'react';

import UploadForm from '../../Components/UploadForm';

const INITIAL_STATE = {
  isLoading: false,
};

class Upload extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = INITIAL_STATE;
  }

  async handleSubmit(fileName, file) {
    console.log('*** handleSubmit ***');
    console.log(fileName, file);
  }

  render() {
    return (
      <div className="section-container">
        <div className="section-header">
          <h1>Upload File</h1>
        </div>
        <div className="upload-form-wrapper">
          <UploadForm onSubmit={this.handleSubmit}/>
        </div>
        <div className="section-header">
          <h1>My Uploads</h1>
        </div>
      </div>
    );
  }
};

export default Upload;
