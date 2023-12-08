import { FC } from 'react';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { Note } from '../../../4_shared/types/interfaces';
import { useAppDispatch } from '../../../4_shared/store/hooks/manageStore';
import { showModal } from '../../../4_shared/store/slices/editNoteModalSlice';

interface EditNoteButtonProps {
  note: Note;
}

const EditNoteButton: FC<EditNoteButtonProps> = ({ note }) => {
  const dispatch = useAppDispatch();

  return (
    <Button
      danger
      icon={<EditOutlined style={{ color: 'green' }} />}
      size={'small'}
      style={{ borderColor: 'green' }}
      onClick={() => dispatch(showModal({ note }))}
    />
  );
};

export default EditNoteButton;
