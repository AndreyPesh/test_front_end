import { PartitionOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { FC } from 'react';
import { useAppSelector } from '../../../4_shared/store/hooks/manageStore';

interface FilterButtonProps {
  showDrawerHandler: () => void;
}

const FilterButton: FC<FilterButtonProps> = ({ showDrawerHandler }) => {
  const { isFilterApplied } = useAppSelector((state) => state.filter);
  const styleButton = isFilterApplied
    ? { background: 'orange', borderColor: 'orange' }
    : { borderColor: 'orange' };
  const styleIcon = isFilterApplied ? { color: 'white' } : { color: 'orange' };
  return (
    <Button
      danger
      icon={<PartitionOutlined style={styleIcon} />}
      size={'small'}
      style={styleButton}
      onClick={showDrawerHandler}
    />
  );
};

export default FilterButton;
