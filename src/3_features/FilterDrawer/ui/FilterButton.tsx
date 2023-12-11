import { PartitionOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { FC } from 'react';

interface FilterButtonProps {
  showDrawerHandler: () => void;
}

const FilterButton: FC<FilterButtonProps> = ({ showDrawerHandler }) => {
  return (
    <Button
      danger
      icon={<PartitionOutlined style={{ color: 'orange' }} />}
      size={'small'}
      style={{ borderColor: 'orange' }}
      onClick={showDrawerHandler}
    />
  );
};

export default FilterButton;
