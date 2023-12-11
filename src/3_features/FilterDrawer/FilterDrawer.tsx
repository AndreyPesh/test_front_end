import { Drawer } from 'antd';
import './filterDrawer.css';
import { FC } from 'react';
import { useAppSelector } from '../../4_shared/store/hooks/manageStore';
import { getAllHashtag } from './utils/getAllHashtag';
import HashtagItem from './ui/HashtagItem';
import SelectedHashtag from './ui/SelectedHashtag';

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
      <div className="selected_tag_list">
        <h3>Selected tags:</h3>
        {filterTags.length > 0 &&
          filterTags.map((hashtag, index) => (
            <SelectedHashtag key={index} hashtag={hashtag} />
          ))}
      </div>
      <div className="tag_list">
        <h3>All tags:</h3>
        {tags.map((tag, index) => {
          if (!filterTags.includes(tag)) {
            return <HashtagItem key={index} hashtag={tag} />;
          }
          return null;
        })}
      </div>
    </Drawer>
  );
};

export default FilterDrawer;
