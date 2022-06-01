import React from 'react';
import PropTypes from 'prop-types';
import './CInput.scss';

const CInput = ({
  value,
  name,
  placeholder,
  updateValue,
  validationRules,
  errors,
}) => {
  return (
    <>
      <input
        type="text"
        className="form__input"
        value={value}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        onChange={(e) => updateValue(e)}
      />
    </>
  );
};

CInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  updateValue: PropTypes.func.isRequired,
  validationRules: PropTypes.object,
  errors: PropTypes.object,
};

export default CInput;
