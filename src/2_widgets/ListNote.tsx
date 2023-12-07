import { List } from 'antd';

const notes = [
  {
    text: 'on the content. An option object can be provided t',
  },
  {
    text: 'makes the height to automatically adjust based',
  },
  {
    text: 'It is necessary to customize the counting ability in some scenarios ',
  },
  {
    text: 'makes the height to automatically adjust based',
  },
  {
    text: 'It is necessary to customize the counting ability in some scenarios ',
  },
];

const ListNote = () => {
  return (
    <List
      style={{ padding: 20, margin: 20, background: "#fff", fontSize: '20px' }}
      // loading={initLoading}
      header="List notes"
      itemLayout="horizontal"
      // loadMore={loadMore}
      dataSource={notes}
      bordered
      renderItem={(item) => (
        <List.Item
          actions={[
            <a href='/' key="list-edit">edit</a>,
            <a href='/' key="list-more">more</a>,
          ]}
        >
          <List.Item.Meta
            title={<a href="https://ant.design">{item.text}</a>}
            style={{ textAlign: 'left' }}
          />
        </List.Item>
      )}
    />
  );
};

export default ListNote;
