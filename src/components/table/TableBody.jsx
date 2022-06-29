import React from 'react';
import { createRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import TableRow from './TableRow';

import './TableBody.scss';

const TableBody = ({ records, openEditModal, deleteRecord }) => {
  return (
    <tbody className="table__tbody tbody">
      <TransitionGroup component={null}>
        {records.map((record) => {
          const itemRef = createRef(null);
          return (
            <CSSTransition
              key={record.id}
              in
              timeout={500}
              nodeRef={itemRef}
              classNames="item"
            >
              <TableRow
                ref={itemRef}
                record={record}
                openEditModal={openEditModal}
                deleteRecord={deleteRecord}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </tbody>
  );
};

TableBody.propTypes = {
  records: PropTypes.array.isRequired,
  openEditModal: PropTypes.func.isRequired,
  deleteRecord: PropTypes.func.isRequired,
};

export default TableBody;
