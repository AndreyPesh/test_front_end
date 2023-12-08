import { Modal } from 'antd';
import { FC } from 'react';

interface EditModalProps {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

const EditModal: FC<EditModalProps> = ({
  isModalOpen,
  handleOk,
  handleCancel,
}) => {
  return (
    <Modal
      title="Edit note"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default EditModal;
