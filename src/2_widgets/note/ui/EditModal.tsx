import { useRef } from 'react';
import { Form, Input, Modal } from 'antd';
import { TextAreaRef } from 'antd/es/input/TextArea';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../4_shared/store/hooks/manageStore';
import { closeModal } from '../../../4_shared/store/slices/editNoteModalSlice';
import { editNote } from '../../../4_shared/store/slices/noteSlice';

const EditModal = () => {
  const { isModalOpen, currentNote } = useAppSelector(
    (state) => state.editModal
  );
  const dispatch = useAppDispatch();
  const refEditableNote = useRef<TextAreaRef>(null);

  const handleOk = () => {
    const editedNoteText =
      refEditableNote.current?.resizableTextArea?.textArea.value;
    if (editedNoteText && editedNoteText !== currentNote.content) {
      dispatch(editNote({ id: currentNote.id, content: editedNoteText }));
    }
    dispatch(closeModal());
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
          <Input.TextArea ref={refEditableNote} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
