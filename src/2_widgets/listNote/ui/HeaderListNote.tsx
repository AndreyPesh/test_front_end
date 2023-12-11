import { useState } from 'react';
import FilterButton from '../../../3_features/FilterDrawer/ui/FilterButton';
import FilterDrawer from '../../../3_features/FilterDrawer/FilterDrawer';

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
        <h2 className='title'>List notes</h2>
        <p className='subtitle'>
          Filter notes: <FilterButton showDrawerHandler={showFilterDrawer} />
        </p>
      </div>
      <FilterDrawer open={open} onClose={closeFilterDrawer} />
    </>
  );
};

export default HeaderListNote;
