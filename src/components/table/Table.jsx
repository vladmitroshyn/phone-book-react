import React from 'react';
import PropTypes from 'prop-types';
import './Table.scss';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const Table = ({ records, openEditModal, deleteRecord }) => {
  return (
    <>
      <h2>My contacts</h2>
      <div className="table">
        <table className="table__inner">
          <TableHeader />
          <tbody>
            {records.map((record) => (
              <TableRow
                key={record.id}
                record={record}
                openEditModal={openEditModal}
                deleteRecord={deleteRecord}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

Table.propTypes = {
  records: PropTypes.array.isRequired,
  openEditModal: PropTypes.func.isRequired,
  deleteRecord: PropTypes.func.isRequired,
};

export default Table;
