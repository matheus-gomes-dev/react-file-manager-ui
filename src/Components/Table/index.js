import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Table = ({
  isLoading,
  head,
  data,
  page,
  loadData,
  hasPagination,
  hasPrevious,
  hasNext
}) => {

  useEffect(() => {
    loadData(1)
  }, [loadData]);

  if (isLoading) {
    return (
      <div className="my-uploads-loader">
        <i className="fa fa-circle-o-notch fa-spin" />
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
              
                {row.map((value, index) => (
                  <td key={`table_value_${rowIndex}_${index}`}>{value}</td>
                ))}
                {/* <td>
                  <Link to={{ pathname: `uploads/${row.id}`}}>
                    <button title="View file">
                      <i className="fa fa-search" />
                    </button>
                  </Link>
                </td> */}
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
              loadData(page - 1);
            }}
          >
            Previous
          </button>
          <button
            className="btn btn-primary pagination-button"
            disabled={!hasNext}
            onClick={(e) => {
              e.preventDefault();
              loadData(page + 1);
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

Table.propTypes = {
  head: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  data: PropTypes.array.isRequired,
  page: PropTypes.number,
  count: PropTypes.number,
  loadData: PropTypes.func.isRequired,
  hasPagination: PropTypes.bool,
  hasPrevious: PropTypes.bool,
  hasNext: PropTypes.bool
};

Table.defaultProps = {
  head: ['#', 'Head 1', 'Head 2'],
  data: [
    ['1', 'Value 1', 'Value 2'],
    ['2', 'Value 3', 'Value 4']
  ],
  loadData: () => console.log('faer'),
  isLoading: false,
  page: 1,
  count: 0,
  hasPagination: false,
  hasPrevious: false,
  hasNext: false
}

export default Table;