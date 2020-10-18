import React from 'react';
import PropTypes from 'prop-types';

const UploadsTable = ({
  isLoading,
  data = [],
  count = 0,
  currentPage = 1,
  perPage = 10,
  onPreviousPage,
  onNextPage
}) => {

  if (isLoading) {
    return (
      <div className="my-uploads-loader">
        <i className="fa fa-circle-o-notch fa-spin" />
      </div>
    )
  }

  const hasPagination = count > perPage;
  const hasPrevious = currentPage > 1;
  const hasNext = (currentPage * perPage) < count;

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">File name</th>
            <th scope="col">Created At</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={`uploads_table_row_${row.id}`}>
              <th scope="row">{row.id}</th>
              <td>{row.name}</td>
              <td>{row.createdAt}</td>
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
              onPreviousPage();
            }}
          >
            Previous
          </button>
          <button
            className="btn btn-primary pagination-button"
            disabled={!hasNext}
            onClick={(e) => {
              e.preventDefault();
              onNextPage();
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

UploadsTable.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array,
  count: PropTypes.number,
  currentPage: PropTypes.number,
  perPage: PropTypes.number,
  onPreviousPage: PropTypes.func.isRequired,
  onNextPage: PropTypes.func.isRequired
}

export default UploadsTable;