import { Form, Modal } from 'antd';
import {
  useAppDispatch,
  useAppSelector,
} from '../../4_shared/store/hooks/manageStore';
import { closeModal } from '../../4_shared/store/slices/editNoteModalSlice';
import { editNote } from '../../4_shared/store/slices/noteSlice';
import HighlightTextArea from '../HighlightTextArea/HighlightTextArea';
import { REG_EXP_HASHTAG } from '../../4_shared/types/constants';

const EditModal = () => {
  const { isModalOpen, currentNote } = useAppSelector(
    (state) => state.editModal
  );
  const { value } = useAppSelector((state) => state.textArea);
  const dispatch = useAppDispatch();

  const handleOk = () => {
    if (value && value !== currentNote.content) {
      const hashtags = value.match(REG_EXP_HASHTAG);
      dispatch(editNote({ id: currentNote.id, content: value, hashtags }));
    }
    if (!value) {
      return;
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
          <HighlightTextArea initValue={currentNote.content} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
