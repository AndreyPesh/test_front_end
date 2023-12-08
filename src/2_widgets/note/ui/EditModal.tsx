import { useRef } from 'react';
import { Form, Input, Modal } from 'antd';
import { TextAreaRef } from 'antd/es/input/TextArea';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../4_shared/store/hooks/manageStore';
import { closeModal } from '../../../4_shared/store/slices/editNoteModalSlice';

const EditModal = () => {
  const { isModalOpen, currentNote } = useAppSelector(
    (state) => state.editModal
  );
  const dispatch = useAppDispatch();
  const ref = useRef<TextAreaRef>(null);

  const handleOk = () => {
    const editedNote = ref.current?.resizableTextArea?.textArea.value;
    if (editedNote && editedNote !== currentNote.content) {
      alert('changed')
    }
    dispatch(closeModal());
    console.log(ref.current?.resizableTextArea?.textArea.value);
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      title="Edit note"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Save"
      okButtonProps={{ style: { background: '#0b830b' } }}
    >
      <Form
        wrapperCol={{ span: 20, offset: 2 }}
        name="edit-note"
        fields={[
          {
            name: ['currentNote'],
            value: currentNote.content,
          },
        ]}
      >
        <Form.Item name="currentNote">
          <Input.TextArea ref={ref} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
