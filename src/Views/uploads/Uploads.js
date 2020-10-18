import React from 'react';
import { get } from 'lodash';

import api from '../../utils/api';
import UploadForm from '../../Components/UploadForm';
import UploadsTable from '../../Components/UploadsTable';

const INITIAL_STATE = {
  isLoading: false,
  uploads: [],
  currentPage: 1,
  count: 0,
};

class Upload extends React.Component {

  constructor(props) {
    super(props);
    this.onTableRefresh = this.onTableRefresh.bind(this);
    this.fetchUploads = this.fetchUploads.bind(this);
    this.state = INITIAL_STATE;
  }

  async componentDidMount() {
    this.fetchUploads();
  }

  async fetchUploads(page = 1) {
    this.setState(prevState => ({ ...prevState, isLoading: true }));
    const results = await api.getUploads(page);
    const uploads = get(results, 'data.rows', []);
    const count = get(results, 'data.count', 0);
    this.setState(prevState => ({
      ...prevState,
      isLoading: false,
      uploads,
      count,
      currentPage: page
    }));
  }

  onTableRefresh(result) {
    const count = get(result, 'data.count', 0);
    const uploads = get(result, 'data.rows', []);
    this.setState({ ...INITIAL_STATE, count, uploads });
  }

  render() {
    const { isLoading, uploads, currentPage, count } = this.state;
    return (
      <div className="section-container">
        <div className="section-header">
          <h1>Upload File</h1>
        </div>
        <div className="upload-form-wrapper">
          <UploadForm onTableRefresh={this.onTableRefresh}/>
        </div>
        <div className="section-header">
          <h1>My Uploads</h1>
        </div>
        <div className="my-uploads-wrapper">
          <UploadsTable
            isLoading={isLoading}
            data={uploads}
            count={count}
            currentPage={currentPage}
            onPreviousPage={() => this.fetchUploads(currentPage - 1)}
            onNextPage={() => this.fetchUploads(currentPage + 1)}
          />
        </div>
      </div>
    );
  }
};

export default Upload;
