import { List } from 'antd';
import NoteItem from '../note/Note';
import { useAppSelector } from '../../4_shared/store/hooks/manageStore';
import EditModal from '../note/ui/EditModal';

const ListNote = () => {
  const listNote = useAppSelector((state) => state.notes);
  return (
    <>
      <List
        style={{
          padding: 20,
          margin: 20,
          background: '#fff',
          fontSize: '20px',
        }}
        // loading={initLoading}
        header="List notes"
        itemLayout="horizontal"
        // loadMore={loadMore}
        dataSource={listNote}
        bordered
        renderItem={(item) => <NoteItem note={item} />}
      />
      <EditModal />
    </>
  );
};

export default ListNote;
