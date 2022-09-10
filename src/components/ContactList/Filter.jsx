import PropTypes from 'prop-types';

import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import styled from 'styled-components';

const FilterWrapper = styled.div`
  display: flex;
  gap: 20px;
  /* flex-direction: column; */

  h3 {
    font-weight: 600;
    font-size: 20px;
  }

  label {
    display: flex;
    align-items: center;

    position: relative;
    cursor: pointer;
  }

  .Filter__icon {
    position: absolute;
    opacity: 0.4;
    transition: opacity 250ms ease;
  }

  .Filter__input {
    padding-left: 20px;

    &:hover,
    &:focus {
      & + .Filter__icon {
        opacity: 1;
      }
    }
  }
`;

const Filter = ({ value, onChange }) => (
  <FilterWrapper>
    <h3>Find by name:</h3>
    <label>
      <input className="Filter__input" name="filter" value={value} onChange={onChange} />
      <HiOutlineSearch className="Filter__icon" />
    </label>
  </FilterWrapper>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
};
