import React from 'react';
import PropTypes from 'prop-types';

import TableRow from './TableRow';

import './TableBody.scss';

const TableBody = ({ records, openEditModal, deleteRecord }) => {
  return (
    <tbody className="table__tbody tbody">
      {records.map((record) => (
        <TableRow
          key={record.id}
          record={record}
          openEditModal={openEditModal}
          deleteRecord={deleteRecord}
        />
      ))}
    </tbody>
  );
};

TableBody.propTypes = {
  records: PropTypes.array.isRequired,
  openEditModal: PropTypes.func.isRequired,
  deleteRecord: PropTypes.func.isRequired,
};

export default TableBody;
