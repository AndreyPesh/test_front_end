import { Layout, Space } from 'antd';
import './styles/index.css';
import AddNote from '../2_widgets/addNote/AddNote';
import ListNote from '../2_widgets/listNote/ListNote';
import TextArea from '../test/TextArea';

const { Header, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 120,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#fff',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};

function App() {
  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout style={{ height: '100vh' }}>
        <Header style={headerStyle}>
          <AddNote />
        </Header>
        <Content style={contentStyle}>
          <ListNote />
          <TextArea />
        </Content>
      </Layout>
    </Space>
  );
}

export default App;
