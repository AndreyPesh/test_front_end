import { Button, Form, Input } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { FieldType } from './types/type';
import { useAppDispatch } from '../../4_shared/store/hooks/manageStore';
import { addNote } from '../../4_shared/store/slices/noteSlice';
import HashTagList from '../../3_features/hashTags/HashTagList';
import { REG_EXP_HASHTAG } from '../../4_shared/types/constants';

const AddNote = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const currentTextNote: string = Form.useWatch('content', form);

  const onFinish = ({ content }: FieldType) => {
    const hashtags = content.match(REG_EXP_HASHTAG);
    const newNote = { id: uuidv4(), content, hashtags };
    dispatch(addNote(newNote));
    form.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Form
        name="basic"
        layout="inline"
        style={{
          padding: 15,
          width: '100%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'baseline',
        }}
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="content"
          style={{ width: '50%' }}
          rules={[{ required: true, message: 'Please input your note!' }]}
        >
          <Input placeholder="Input your note...." />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add note
          </Button>
        </Form.Item>
      </Form>
      <HashTagList value={currentTextNote} />
    </>
  );
};

export default AddNote;
