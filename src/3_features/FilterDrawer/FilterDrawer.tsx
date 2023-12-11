import { FC } from 'react';
import { Drawer } from 'antd';
import './filterDrawer.css';
import { useAppSelector } from '../../4_shared/store/hooks/manageStore';
import { getAllHashtag } from './utils/getAllHashtag';
import HashtagItemList from './ui/HashtagItemList';
import SelectedHashtag from './ui/SelectedHashtag';
import FilterControl from './ui/FilterControl';

interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
}

const FilterDrawer: FC<FilterDrawerProps> = ({ open, onClose }) => {
  const filterTags = useAppSelector((state) => state.filter.tags);
  const notes = useAppSelector((state) => state.notes);
  const tags = getAllHashtag(notes);

  return (
    <Drawer
      title="Filter by hashtag"
      placement="right"
      onClose={onClose}
      open={open}
    >
      <SelectedHashtag filterTags={filterTags} />
      <HashtagItemList tagsList={tags} filterTags={filterTags} />
      <FilterControl onCloseDrawer={onClose} />
    </Drawer>
  );
};

export default FilterDrawer;
