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
    deleteNote: (state, action: PayloadAction<{ id: string }>) => {
      return [...state.filter((note) => note.id !== action.payload.id)];
    },
  },
});

export const { addNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;
