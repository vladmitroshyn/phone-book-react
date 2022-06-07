import React from 'react';
import PropTypes from 'prop-types';
import './CInput.scss';

const CInput = ({ placeholder, register, errors }) => {
  return (
    <>
      <input
        type="text"
        className={`form__input ${
          errors[register.name] ? 'form__input_invalid' : null
        }`}
        placeholder={placeholder}
        autoComplete="off"
        {...register}
      />
      <span className="form__error-message">
        {errors[register.name]?.message}
      </span>
    </>
  );
};

CInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.object,
  errors: PropTypes.object,
};

export default CInput;
