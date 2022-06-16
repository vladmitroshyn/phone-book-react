import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import ReactModal from 'react-modal';

import Form from '../form/Form';

import './EditRecordModal.scss';

const EditRecordModal = ({
  modalIsOpen,
  closeModal,
  editedContact,
  editContact,
}) => {
  useEffect(() => ReactModal.setAppElement('#modal'), []);

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={modalIsOpen}
      contentLabel="onRequestClose Example"
      onRequestClose={closeModal}
      className="modal__window"
      overlayClassName="modal"
    >
      <FaTimes className="modal__close-btn" onClick={closeModal} />
      <h2>Edit record</h2>
      <Form
        updateContact={editContact}
        editMode={true}
        editedContact={editedContact}
      />
    </ReactModal>
  );
};

EditRecordModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  editedContact: PropTypes.object.isRequired,
  editContact: PropTypes.func.isRequired,
};

export default EditRecordModal;
