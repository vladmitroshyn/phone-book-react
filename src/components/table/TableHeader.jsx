import React from 'react';
import './TableHeader.scss';

const TableHeader = () => {
  return (
    <thead className="table__thead thead">
      <tr className="thead__tr">
        <th className="thead__th" scope="col">
          First Name
        </th>
        <th className="thead__th" scope="col">
          Last Name
        </th>
        <th className="thead__th" scope="col">
          Phone
        </th>
        <th className="thead__th" scope="col">
          Email
        </th>
        <th className="thead__th" scope="col">
          &nbsp;
        </th>
        <th className="thead__th" scope="col">
          &nbsp;
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
