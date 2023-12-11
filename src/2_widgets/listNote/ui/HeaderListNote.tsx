import React from 'react';
import FilterButton from './FilterButton';

const HeaderListNote = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <h2>List notes</h2>
      <FilterButton />
    </div>
  );
};

export default HeaderListNote;
