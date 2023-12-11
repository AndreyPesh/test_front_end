import { FC } from 'react';
import { Button } from 'antd';
import { useAppDispatch } from '../../../4_shared/store/hooks/manageStore';
import {
  applyFilter,
  resetFilter,
} from '../../../4_shared/store/slices/filterSlice';

interface FilterControlProps {
  onCloseDrawer: () => void;
}

const FilterControl: FC<FilterControlProps> = ({ onCloseDrawer }) => {
  const dispatch = useAppDispatch();

  const applyFilterHandler = () => {
    dispatch(applyFilter());
    onCloseDrawer();
  };

  const resetFilterHandler = () => {
    dispatch(resetFilter());
    onCloseDrawer();
  };

  return (
    <div className="filter_buttons">
      <Button type="primary" onClick={applyFilterHandler}>
        Apply filter
      </Button>
      <Button type="primary" danger onClick={resetFilterHandler}>
        Reset filter
      </Button>
    </div>
  );
};

export default FilterControl;
