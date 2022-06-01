import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CInput from './CInput';
import './Form.scss';

const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
};

const Form = ({ updateContact, editMode, editedContact }) => {
  const [contact, setContact] = useState(initialState);

  useEffect(() => {
    if (editedContact) {
      setContact({ ...editedContact });
    }
  }, [editedContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateContact({ id: new Date().valueOf(), ...contact });
    setContact(initialState);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <CInput
        value={contact.firstName}
        name="firstName"
        placeholder="First Name"
        updateValue={handleChange}
      />
      <CInput
        value={contact.lastName}
        name="lastName"
        placeholder="Last Name"
        updateValue={handleChange}
      />
      <CInput
        value={contact.phone}
        name="phone"
        placeholder="Phone"
        updateValue={handleChange}
      />
      <CInput
        value={contact.email}
        name="email"
        placeholder="Email"
        updateValue={handleChange}
      />
      <button type="submit" className="form__submit-btn">
        {editMode ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

Form.defaultProps = {
  editMode: false,
  editedContact: null,
};

Form.propTypes = {
  updateContact: PropTypes.func.isRequired,
  editMode: PropTypes.bool,
  editedContact: PropTypes.object,
};

export default Form;
