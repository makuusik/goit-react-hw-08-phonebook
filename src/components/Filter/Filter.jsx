import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/contactsSlice';
import { FilterContainer } from './FilterStyled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleFilterChange = event => {
    const value = event.target.value;
    dispatch(setFilter(value.trim()));
  };

  return (
    <FilterContainer>
      Фильтр по имени:
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Фильтр контактов по имени"
      />
    </FilterContainer>
  );
};

export default Filter;
