import { FC } from 'react';
import { List } from 'antd';
import { Note } from '../../4_shared/types/interfaces';
import DeleteNoteButton from './ui/DeleteNoteButton';
import EditNoteButton from './ui/EditNoteButton';

interface NoteProps {
  note: Note;
}

const NoteItem: FC<NoteProps> = ({ note }) => {
  return (
    <List.Item
      actions={[
        // <a href="/" key="list-edit">
        //   edit
        // </a>,
        <EditNoteButton note={note} />,
        <DeleteNoteButton note={note} />,
      ]}
    >
      <List.Item.Meta
        title={<a href="https://ant.design">{note.content}</a>}
        style={{ textAlign: 'left' }}
      />
    </List.Item>
  );
};

export default NoteItem;
