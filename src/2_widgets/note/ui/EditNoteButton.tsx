import { FC, useState } from 'react';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { Note } from '../../../4_shared/types/interfaces';
import EditModal from './EditModal';

interface EditNoteButtonProps {
  note: Note;
}

const EditNoteButton: FC<EditNoteButtonProps> = ({ note }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const editNoteHandler = (note: Note) => {};

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        danger
        icon={<EditOutlined style={{ color: 'green' }} />}
        size={'small'}
        style={{ borderColor: 'green' }}
        onClick={showModal}
      />
      <EditModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default EditNoteButton;
