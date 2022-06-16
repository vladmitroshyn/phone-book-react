import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import ContactSchema from '../../validation';

import CInput from './CInput';

import './Form.scss';

const Form = ({ updateContact, editMode, editedContact }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: useMemo(() => {
      return editedContact;
    }, [editedContact]),
    mode: 'onChange',
    resolver: yupResolver(ContactSchema),
  });

  const onSubmit = (data) => {
    updateContact({ id: new Date().valueOf(), ...data });
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <CInput
        placeholder="First Name"
        register={register('firstName')}
        errors={errors}
      />
      <CInput
        placeholder="Last Name"
        register={register('lastName')}
        errors={errors}
      />
      <CInput
        placeholder="Phone"
        register={register('phone')}
        errors={errors}
      />
      <CInput
        placeholder="Email"
        register={register('email')}
        errors={errors}
      />
      <button type="submit" className="form__submit-btn">
        {editMode ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

Form.defaultProps = {
  editMode: false,
  editedContact: {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  },
};

Form.propTypes = {
  updateContact: PropTypes.func.isRequired,
  editMode: PropTypes.bool,
  editedContact: PropTypes.object,
};

export default Form;
