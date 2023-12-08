import { FC } from 'react';
import { List } from 'antd';
import { Note } from './types/interfaces';

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
        <a href="/" key="list-more">
          remove
        </a>,
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
