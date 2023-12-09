import { FC } from 'react';
import { List } from 'antd';
import { Note } from '../../4_shared/types/interfaces';
import DeleteNoteButton from './ui/DeleteNoteButton';
import EditNoteButton from './ui/EditNoteButton';
import HashTagList from '../../3_features/hashTags/HashTagList';

interface NoteProps {
  note: Note;
}

const NoteItem: FC<NoteProps> = ({ note }) => {
  return (
    <>
      <List.Item
        actions={[
          <EditNoteButton note={note} />,
          <DeleteNoteButton note={note} />,
        ]}
      >
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: '1' }}>
          <List.Item.Meta title={note.content} style={{ textAlign: 'left' }} />
          <HashTagList value={note.content} />
        </div>
      </List.Item>
    </>
  );
};

export default NoteItem;
