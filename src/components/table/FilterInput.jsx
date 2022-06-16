import React from 'react';
import PropTypes from 'prop-types';

import './FilterInput.scss';

const FilterInput = ({ placeholder, register }) => {
  return (
    <input
      type="text"
      className="filters__input"
      autoComplete="off"
      placeholder={placeholder}
      {...register}
    />
  );
};

FilterInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.object.isRequired,
};

export default FilterInput;
