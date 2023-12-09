import { Form, Modal } from 'antd';
import {
  useAppDispatch,
  useAppSelector,
} from '../../4_shared/store/hooks/manageStore';
import { closeModal } from '../../4_shared/store/slices/editNoteModalSlice';
import { editNote } from '../../4_shared/store/slices/noteSlice';
import HighlightTextArea from '../HighlightTextArea/HighlightTextArea';

const EditModal = () => {
  const { isModalOpen, currentNote } = useAppSelector(
    (state) => state.editModal
  );
  const dispatch = useAppDispatch();
  // const refEditableNote = useRef<Editor>(null);

  const handleOk = () => {
    // console.log(refEditableNote.current);
    // const editedNoteText =
    //   refEditableNote.current?.resizableTextArea?.textArea.value;
    // if (editedNoteText && editedNoteText !== currentNote.content) {
    //   dispatch(editNote({ id: currentNote.id, content: editedNoteText }));
    // }
    // if (!editedNoteText) {
    //   return;
    // }
    // dispatch(closeModal());
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
        wrapperCol={{ span: 24 }}
        name="edit-note"
        fields={[
          {
            name: ['currentNote'],
            value: currentNote.content,
          },
        ]}
      >
        <Form.Item name="currentNote">
          {/* <Input.TextArea ref={refEditableNote} /> */}
          <HighlightTextArea initValue={currentNote.content} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
