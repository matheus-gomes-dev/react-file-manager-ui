import React from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';

import api from '../../utils/api';
import UploadDetailsTable from '../../Components/UploadDetailsTable';

const INITIAL_STATE = {
  isLoading: true,
  uploaded_data: [],
  name: '',
  created_at: '',
};

class UploadById extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  async componentDidMount() {
    const id = get(this.props, 'match.params.id');
    const response = await api.getUploadById(id);
    if (!response) {
      this.setState({ ...INITIAL_STATE, isLoading: false });
      return;
    };
    const uploaded_data = get(response, 'data.uploaded_data', []);
    const name = get(response, 'data.name', '');
    const created_at = get(response, 'data.createdAt', '');
    this.setState({ uploaded_data, name, created_at, isLoading: false });
  }

  render() {
    const { uploaded_data, name, created_at } = this.state;
    const id = get(this.props, 'match.params.id');
    
    return (
      <div className="section-container">
        <div className="section-header">
          <h1>{name ? `My Upload ${id} - ${name}` : `My Upload ${id}`}</h1>
        </div>
        <div className="upload-details-created_at">
          {created_at && <span>{`Created at ${created_at}`}</span>}
        </div>
        <div className="upload-details-data-wrapper">
          <UploadDetailsTable data={uploaded_data} />
        </div>
        <div className="upload-details-buttons-container">
          <Link to={{ pathname: '/' }}>
            <button className="btn btn-primary upload-details-back-button">
              Back
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default UploadById;
