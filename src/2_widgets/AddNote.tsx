import { Button, Form, Input } from 'antd';

const AddNote = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  type FieldType = {
    note?: string;
  };

  return (
    <Form
      name="basic"
      layout="inline"
      style={{
        padding: 30,
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'baseline',
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        name="note"
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
  );
};

export default AddNote;
