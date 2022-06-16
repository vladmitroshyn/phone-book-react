import React, { useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import FilterInput from './FilterInput';

import './FilterPanel.scss';

const FilterPanel = ({ updateFilterValue }) => {
  const { register } = useForm();

  const debounceFilterValue = useMemo(
    () => debounce(updateFilterValue, 500),
    [updateFilterValue],
  );

  useEffect(() => {
    return () => {
      debounceFilterValue.cancel();
    };
  }, [debounceFilterValue]);

  return (
    <form className="filters__wrapper">
      <div className="filters__container">
        <FilterInput
          placeholder="By first name..."
          register={register('firstName', {
            onChange: debounceFilterValue,
          })}
        />
      </div>
      <div className="filters__container">
        <FilterInput
          placeholder="By second name..."
          register={register('lastName', {
            onChange: debounceFilterValue,
          })}
        />
      </div>
      <div className="filters__container">
        <FilterInput
          placeholder="By phone..."
          register={register('phone', {
            onChange: debounceFilterValue,
          })}
        />
      </div>
      <div className="filters__container">
        <FilterInput
          placeholder="By email..."
          register={register('email', {
            onChange: debounceFilterValue,
          })}
        />
      </div>
    </form>
  );
};

FilterPanel.propTypes = {
  updateFilterValue: PropTypes.func.isRequired,
};

export default FilterPanel;
