import React from 'react';
import PropTypes from 'prop-types';
import './TableRow.scss';
import { FaEdit, FaTimes } from 'react-icons/fa';

const TableRow = ({ record, openEditModal, deleteRecord }) => {
  return (
    <tr scope="row" className="table__row">
      <td data-label="First Name">{record.firstName}</td>
      <td data-label="Second Name">{record.lastName}</td>
      <td data-label="Phone">{record.phone}</td>
      <td data-label="Email">{record.email}</td>
      <td data-label="Edit">
        <span className="table__btn-wrapper">
          <FaEdit
            className="table__edit-btn"
            onClick={() => openEditModal(record)}
          />
        </span>
      </td>
      <td data-label="Delete">
        <span className="table__btn-wrapper">
          <FaTimes
            className="table__delete-btn"
            onClick={() => deleteRecord(record.id)}
          />
        </span>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  record: PropTypes.object.isRequired,
  openEditModal: PropTypes.func.isRequired,
  deleteRecord: PropTypes.func.isRequired,
};

export default TableRow;
