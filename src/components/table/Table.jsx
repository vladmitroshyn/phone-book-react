import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  MdKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

import FilterPanel from './FilterPanel';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

import './Table.scss';

const Table = ({ records, openEditModal, deleteRecord }) => {
  const [filters, setFilters] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });
  const [isFilterPanelShown, setIsFilterPanelShown] = useState(false);

  const handleFilterValue = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const filterContacts = (records) => {
    Object.keys(filters).forEach((key) => {
      records = records.filter((record) =>
        record[key]
          .toString()
          .toLowerCase()
          .includes(filters[key].toLowerCase()),
      );
    });
    return records;
  };

  const handleClick = () => {
    setIsFilterPanelShown(!isFilterPanelShown);
  };

  return (
    <>
      <h2>My contacts</h2>
      <div className="table">
        <div className="filters">
          <button
            className={`filters__toggle-button ${
              isFilterPanelShown ? 'active' : null
            }`}
            onClick={handleClick}
          >
            {isFilterPanelShown ? (
              <MdKeyboardArrowDown />
            ) : (
              <MdOutlineKeyboardArrowRight />
            )}
            <span>Filters</span>
          </button>
          {isFilterPanelShown ? (
            <FilterPanel updateFilterValue={handleFilterValue} />
          ) : null}
        </div>
        <table className="table__inner">
          <TableHeader />
          <TableBody
            records={filterContacts(records)}
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
