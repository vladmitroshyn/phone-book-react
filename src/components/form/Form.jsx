import React from 'react';
import PropTypes from 'prop-types';
import CInput from './CInput';
import { useFormik } from 'formik';
import ContactSchema from '../../validation';
import './Form.scss';

const Form = ({ updateContact, editMode, editedContact }) => {
  const formik = useFormik({
    initialValues: {
      firstName: editedContact?.firstName ?? '',
      lastName: editedContact?.lastName ?? '',
      phone: editedContact?.phone ?? '',
      email: editedContact?.email ?? '',
    },
    enableReinitialize: true,
    validationSchema: ContactSchema,
    onSubmit: (values, { resetForm }) => {
      if (editMode) {
        updateContact({ id: editedContact.id, ...values });
      } else {
        updateContact({ id: new Date().valueOf(), ...values });
      }
      resetForm();
    },
  });

  console.log(formik.touched);

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <CInput
        name="firstName"
        placeholder="First Name"
        value={formik.values.firstName}
        updateValue={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched}
        errors={formik.errors}
      />
      <CInput
        name="lastName"
        placeholder="Last Name"
        value={formik.values.lastName}
        updateValue={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched}
        errors={formik.errors}
      />
      <CInput
        name="phone"
        placeholder="Phone"
        value={formik.values.phone}
        updateValue={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched}
        errors={formik.errors}
      />
      <CInput
        name="email"
        placeholder="Email"
        value={formik.values.email}
        updateValue={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched}
        errors={formik.errors}
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
