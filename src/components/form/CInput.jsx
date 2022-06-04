import React from 'react';
import PropTypes from 'prop-types';
import './CInput.scss';

const CInput = ({
  value,
  name,
  placeholder,
  updateValue,
  onBlur,
  touched,
  errors,
}) => {
  return (
    <>
      <input
        type="text"
        className={`form__input ${
          touched[name] && errors[name] && 'form__input_invalid'
        }`}
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        name={name}
        onChange={(e) => updateValue(e)}
        onBlur={onBlur}
        errors={errors}
      />
      {touched[name] && errors[name] ? (
        <span className="form__error-message">{errors[name]}</span>
      ) : null}
    </>
  );
};

CInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  updateValue: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  touched: PropTypes.object,
  errors: PropTypes.object,
};

export default CInput;
