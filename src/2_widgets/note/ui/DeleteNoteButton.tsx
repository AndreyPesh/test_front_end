import { FC } from 'react';
import { Note } from '../types/interfaces';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

interface DeleteButtonProps {
  note: Note;
}

const DeleteNoteButton: FC<DeleteButtonProps> = ({ note }) => {
  const deleteNoteHandler = (id: string) => {
    console.log('delete note ', id);
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
