import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Table = ({
  isLoading,
  head,
  data,
  loadNext,
  loadPrevious,
  hasPagination,
  hasPrevious,
  hasNext
}) => {

  if (isLoading) {
    return (
      <div className="my-uploads-loader">
        <FontAwesomeIcon icon={faSpinner} spin />
      </div>
    )
  }
  
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            {head.map((item, index) => (
              <th scope="col" key={`table_head_${index}`}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
              <tr key={`table_row_${rowIndex}`}>
              
                {Object.keys(row).map((key, index) => (
                  <td key={`table_value_${rowIndex}_${index}`}>{row[key]}</td>
                ))}
                <td>
                  <Link to={{ pathname: `uploads/${row.id}`}}>
                    <button title="View file">
                      <FontAwesomeIcon icon={faSearch} />
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
            onClick={loadPrevious}
          >
            Previous
          </button>
          <button
            className="btn btn-primary pagination-button"
            disabled={!hasNext}
            onClick={loadNext}
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

Table.propTypes = {
  isLoading: PropTypes.bool,
  head: PropTypes.array.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadPrevious: PropTypes.func,
  loadNext: PropTypes.func,
  hasPagination: PropTypes.bool,
  hasPrevious: PropTypes.bool,
  hasNext: PropTypes.bool
};

Table.defaultProps = {
  isLoading: false,
  head: ['#', 'Head 1', 'Head 2'],
  data: [
    { key: '1', value1: 'Value 1', value2: 'Value 2' },
    { key: '2', value1: 'Value 3', value2: 'Value 4' },
  ],
  loadPrevious: undefined,
  loadNext: undefined,
  hasPagination: false,
  hasPrevious: false,
  hasNext: false
}

export default Table;