import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Note } from '../../types/interfaces';

const initStateNotes: Note[] = [];

export const noteSlice = createSlice({
  name: 'notes',
  initialState: initStateNotes,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.push(action.payload);
    },
    setListNote: (state, action: PayloadAction<Note[]>) => {
      return (state = [...action.payload]);
    },
    editNote: (state, action: PayloadAction<Note>) => {
      const editableNote = state.find((note) => note.id === action.payload.id);
      if (editableNote) {
        editableNote.content = action.payload.content;
        editableNote.hashtags = action.payload.hashtags;
      }
    },
    deleteNote: (state, action: PayloadAction<{ id: string }>) => {
      return [...state.filter((note) => note.id !== action.payload.id)];
    },
  },
});

export const { addNote, setListNote, editNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;
