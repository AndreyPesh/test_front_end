import { FilterOutlined, PartitionOutlined } from "@ant-design/icons";
import { Button } from "antd";

const FilterButton = () => {
  return (
    <Button
      danger
      icon={<PartitionOutlined style={{ color: 'orange' }} />}
      size={'small'}
      style={{ borderColor: 'orange' }}
      onClick={() => {}}
    />
  );
};

export default FilterButton;