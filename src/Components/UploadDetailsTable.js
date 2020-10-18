import React from 'react';
import PropTypes from 'prop-types';

const UploadDetailsTable = ({ data = [] }) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Yard Code</th>
        <th scope="col">Employee Code</th>
        <th scope="col">Clock In</th>
        <th scope="col">Clock Out</th>
      </tr>
    </thead>
    <tbody>
      {data.map(row => (
        <tr key={`upload_details_table_row_${row.id}`}>
          <th scope="row">{row.file_row + 1}</th>
          <td>{row.yard_code}</td>
          <td>{row.employee_code}</td>
          <td>{row.clock_in}</td>
          <td>{row.clock_out}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

UploadDetailsTable.propTypes = {
  data: PropTypes.array.isRequired
}

export default UploadDetailsTable;