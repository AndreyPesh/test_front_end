import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import '../filterDrawer.css';
import { useAppDispatch } from '../../../4_shared/store/hooks/manageStore';
import { deleteFilterTag } from '../../../4_shared/store/slices/filterSlice';

const SelectedHashtag = ({ filterTags }: { filterTags: string[] }) => {
  const dispatch = useAppDispatch();

  const deleteTagFromFilterHandler = (hashtag: string) => {
    dispatch(deleteFilterTag(hashtag));
  };

  return (
    <div className="selected_tag_list">
      <h3>Selected tags:</h3>
      {filterTags.length > 0 &&
        filterTags.map((hashtag, index) => (
          <span key={index} className="selected_tag">
            {hashtag}
            <Button
              danger
              icon={<CloseOutlined style={{ color: 'gray' }} />}
              size={'small'}
              style={{ border: 'none' }}
              onClick={() => deleteTagFromFilterHandler(hashtag)}
            />
          </span>
        ))}
    </div>
  );
};

export default SelectedHashtag;
