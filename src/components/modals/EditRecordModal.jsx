import React from 'react';
import { useEffect } from 'react';
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
  useEffect(() => {
    ReactModal.setAppElement('#root');
  }, []);
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      closeTimeoutMS={500}
      contentLabel="Modal for contact editing"
      overlayClassName="modal"
      className="modal__window"
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
