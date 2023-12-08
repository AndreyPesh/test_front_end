import { List } from 'antd';
import NoteItem from './note/Note';

const notes = [
  {
    content: 'on the content. An option object can be provided t',
  },
  {
    content: 'makes the height to automatically adjust based',
  },
  {
    content:
      'It is necessary to customize the counting ability in some scenarios ',
  },
  {
    content: 'makes the height to automatically adjust based',
  },
  {
    content:
      'It is necessary to customize the counting ability in some scenarios ',
  },
];

const ListNote = () => {
  return (
    <List
      style={{ padding: 20, margin: 20, background: '#fff', fontSize: '20px' }}
      // loading={initLoading}
      header="List notes"
      itemLayout="horizontal"
      // loadMore={loadMore}
      dataSource={notes}
      bordered
      renderItem={(item) => <NoteItem note={item} />}
    />
  );
};

export default ListNote;
