import { FC } from 'react';
import { List } from 'antd';
import { Note } from './types/interfaces';
import DeleteNoteButton from './ui/DeleteNoteButton';

interface NoteProps {
  note: Note;
}

const NoteItem: FC<NoteProps> = ({ note }) => {
  return (
    <List.Item
      actions={[
        <a href="/" key="list-edit">
          edit
        </a>,
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
