import React from 'react';
import { Link } from 'react-router-dom';

class UploadsTable extends React.Component {

  componentDidMount() {
    const { loadUploads } = this.props;
    loadUploads();
  }

  render() {

    const {
      isLoading,
      uploads = [],
      count = 0,
      page = 1,
      perPage = 10,
      loadUploads
    } = this.props;

    if (isLoading) {
      return (
        <div className="my-uploads-loader">
          <i className="fa fa-circle-o-notch fa-spin" />
        </div>
      )
    }
  
    const hasPagination = count > perPage;
    const hasPrevious = page > 1;
    const hasNext = (page * perPage) < count;
  
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">File name</th>
              <th scope="col">Created At</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {uploads.map(row => (
                <tr key={`uploads_table_row_${row.id}`}>
                
                  <th scope="row">{row.id}</th>
                  <td>{row.name}</td>
                  <td>{row.createdAt}</td>
                  <td>
                    <Link to={{ pathname: `uploads/${row.id}`}}>
                      <button title="View file">
                        <i className="fa fa-search" />
                      </button>
                    </Link>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
        {hasPagination && (
          <div className="pagination-container">
            <button
              className="btn btn-primary pagination-button"
              disabled={!hasPrevious}
              onClick={(e) => {
                e.preventDefault();
                loadUploads(page - 1);
              }}
            >
              Previous
            </button>
            <button
              className="btn btn-primary pagination-button"
              disabled={!hasNext}
              onClick={(e) => {
                e.preventDefault();
                loadUploads(page + 1);
              }}
            >
              Next
            </button>
          </div>
        )}
      </div>
    )    
  }

}

export default UploadsTable;