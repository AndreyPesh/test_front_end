import { Drawer } from 'antd';
import { FC } from 'react';

interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
}

const FilterDrawer: FC<FilterDrawerProps> = ({ open, onClose }) => {
  return (
    <Drawer
      title="Filter by hashtag"
      placement="right"
      onClose={onClose}
      open={open}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default FilterDrawer;
