import AddNote from '../2_widgets/AddNote';
import './styles/index.css';
import { Layout, Space } from 'antd';

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
        <Content style={contentStyle}>Content</Content>
      </Layout>
    </Space>
  );
}

export default App;
