import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Note } from '../../types/interfaces';
import { REG_EXP_HASHTAG } from '../../types/constants';

export interface StateNoteListNote extends Note {
  hashtags: string[] | null;
}

const initStateNotes: StateNoteListNote[] = [];

export const noteSlice = createSlice({
  name: 'notes',
  initialState: initStateNotes,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      const hashtags = action.payload.content.match(REG_EXP_HASHTAG);
      state.push({ ...action.payload, hashtags });
    },
    setListNote: (state, action: PayloadAction<StateNoteListNote[]>) => {
      return (state = [...action.payload]);
    },
    editNote: (state, action: PayloadAction<Note>) => {
      const editableNote = state.find((note) => note.id === action.payload.id);
      if (editableNote) {
        editableNote.content = action.payload.content;
        editableNote.hashtags = action.payload.content.match(REG_EXP_HASHTAG);
      }
    },
    deleteNote: (state, action: PayloadAction<{ id: string }>) => {
      return [...state.filter((note) => note.id !== action.payload.id)];
    },
  },
});

export const { addNote, setListNote, editNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;
