import React from 'react';

const FilterButton = () => {
  return (
    <button className='filter-button'>
      <img className='filter-img' src={window.smallFilter} alt="filter-icon" />
      <span className='font-st2'>Filters</span>
    </button>
  )
};

export default FilterButton;