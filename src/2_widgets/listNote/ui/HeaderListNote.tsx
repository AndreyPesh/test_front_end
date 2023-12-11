import { useState } from 'react';
import FilterButton from './FilterButton';
import FilterDrawer from './FilterDrawer';

const HeaderListNote = () => {
  const [open, setOpen] = useState(false);

  const showFilterDrawer = () => {
    setOpen(true);
  };

  const closeFilterDrawer = () => {
    setOpen(false);
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2>List notes</h2>
        <p>
          Filter notes: <FilterButton showDrawerHandler={showFilterDrawer} />
        </p>
      </div>
      <FilterDrawer open={open} onClose={closeFilterDrawer} />
    </>
  );
};

export default HeaderListNote;
