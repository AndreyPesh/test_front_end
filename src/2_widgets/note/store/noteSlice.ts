import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Note } from '../types/interfaces';

const initStateNotes: Note[] = [];

export const noteSlice = createSlice({
  name: 'notes',
  initialState: initStateNotes,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.push(action.payload);
    },
  },
});

export const { addNote } = noteSlice.actions;
export default noteSlice.reducer;
