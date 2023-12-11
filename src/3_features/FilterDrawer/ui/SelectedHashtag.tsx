import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const SelectedHashtag = ({ hashtag }: { hashtag: string }) => {
  return (
    <span className="selected_tag">
      {hashtag}
      <Button
        danger
        icon={<CloseOutlined style={{ color: 'gray' }} />}
        size={'small'}
        style={{ borderColor: 'gray' }}
        onClick={() => {}}
      />
    </span>
  );
};

export default SelectedHashtag;
