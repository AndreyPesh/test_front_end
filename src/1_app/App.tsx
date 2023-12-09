import { Layout, Space } from 'antd';
import './styles/index.css';
import AddNote from '../2_widgets/addNote/AddNote';
import ListNote from '../2_widgets/listNote/ListNote';

const { Header, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 130,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#fff',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 130px)',
  color: '#fff',
  backgroundColor: '#108ee9',
};

function App() {
  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout style={{ height: 'auto' }}>
        <Header style={headerStyle}>
          <AddNote />
        </Header>
        <Content style={contentStyle}>
          <ListNote />
        </Content>
      </Layout>
    </Space>
  );
}

export default App;
