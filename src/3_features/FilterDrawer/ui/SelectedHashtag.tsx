import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import '../filterDrawer.css';
import { useAppDispatch } from '../../../4_shared/store/hooks/manageStore';
import { deleteFilterTag } from '../../../4_shared/store/slices/filterSlice';

const SelectedHashtag = ({ hashtag }: { hashtag: string }) => {
  const dispatch = useAppDispatch();

  const deleteTagFromFilterHandler = (hashtag: string) => {
    dispatch(deleteFilterTag(hashtag));
  };

  return (
    <span className="selected_tag">
      {hashtag}
      <Button
        danger
        icon={<CloseOutlined style={{ color: 'gray' }} />}
        size={'small'}
        style={{ border: 'none' }}
        onClick={() => deleteTagFromFilterHandler(hashtag)}
      />
    </span>
  );
};

export default SelectedHashtag;
