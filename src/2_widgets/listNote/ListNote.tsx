import { List } from 'antd';
import NoteItem from '../note/Note';
import { useAppSelector } from '../../4_shared/store/hooks/manageStore';
import EditModal from '../../3_features/editModal/EditModal';
import HeaderListNote from './ui/HeaderListNote';
import { filterListNoteByTags } from './utils/filterListNote';

const ListNote = () => {
  const listNote = useAppSelector((state) => state.notes);
  const { isFilterApplied, tags } = useAppSelector((state) => state.filter);
  const renderListNote = isFilterApplied
    ? filterListNoteByTags(listNote, tags)
    : listNote;
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
        dataSource={renderListNote}
        bordered
        renderItem={(item) => <NoteItem note={item} />}
      />
      <EditModal />
    </>
  );
};

export default ListNote;
