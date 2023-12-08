import { FC } from 'react';
import { Note } from '../../../4_shared/types/interfaces';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../../../4_shared/store/hooks/manageStore';
import { deleteNote } from '../../../4_shared/store/slices/noteSlice';

interface DeleteButtonProps {
  note: Note;
}

const DeleteNoteButton: FC<DeleteButtonProps> = ({ note }) => {
  const dispatch = useAppDispatch();

  const deleteNoteHandler = (id: string) => {
    dispatch(deleteNote({ id }));
  };

  return (
    <Button
      danger
      icon={<DeleteOutlined />}
      size={'small'}
      onClick={() => deleteNoteHandler(note.id)}
    />
  );
};

export default DeleteNoteButton;
