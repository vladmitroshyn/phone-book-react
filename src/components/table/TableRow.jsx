import React from 'react';
import PropTypes from 'prop-types';
import './TableRow.scss';
import { FaEdit, FaTimes } from 'react-icons/fa';

const TableRow = ({ record, openEditModal, deleteRecord }) => {
  return (
    <tr scope="row" className="tbody__tr">
      <td className="tbody__td" data-label="First Name">
        {record.firstName}
      </td>
      <td className="tbody__td" data-label="Second Name">
        {record.lastName}
      </td>
      <td className="tbody__td" data-label="Phone">
        {record.phone}
      </td>
      <td className="tbody__td" data-label="Email">
        {record.email}
      </td>
      <td className="tbody__td" data-label="Edit">
        <span className="tbody__btn-wrapper">
          <FaEdit
            className="tbody__btn-edit"
            onClick={() => openEditModal(record)}
          />
        </span>
      </td>
      <td className="tbody__td" data-label="Delete">
        <span className="tbody__btn-wrapper">
          <FaTimes
            className="tbody__btn-delete"
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
