import { Drawer } from 'antd';
import './filterDrawer.css';
import { FC } from 'react';
import { useAppSelector } from '../../4_shared/store/hooks/manageStore';
import { getAllHashtag } from './utils/getAllHashtag';
import HashtagItem from './ui/HashtagItem';

interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
}

const FilterDrawer: FC<FilterDrawerProps> = ({ open, onClose }) => {
  const notes = useAppSelector((state) => state.notes);
  const tags = getAllHashtag(notes);

  return (
    <Drawer
      title="Filter by hashtag"
      placement="right"
      onClose={onClose}
      open={open}
    >
      {tags.map((tag, index) => (
        <HashtagItem key={index} hashtag={tag} />
      ))}
    </Drawer>
  );
};

export default FilterDrawer;
