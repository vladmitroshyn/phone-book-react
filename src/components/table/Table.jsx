import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import './Table.scss';

const Table = ({ records, openEditModal, deleteRecord }) => {
  return (
    <>
      <h2>My contacts</h2>
      <div className="table">
        <table className="table__inner">
          <TableHeader />
          <TableBody
            records={records}
            openEditModal={openEditModal}
            deleteRecord={deleteRecord}
          />
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
