import { List } from 'antd';
import NoteItem from '../note/Note';
import { useAppSelector } from '../../4_shared/store/hooks/manageStore';
import EditModal from '../../3_features/editModal/EditModal';
import HeaderListNote from './ui/HeaderListNote';

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
        header={<HeaderListNote />}
        itemLayout="horizontal"
        dataSource={listNote}
        bordered
        renderItem={(item) => <NoteItem note={item} />}
      />
      <EditModal />
    </>
  );
};

export default ListNote;
