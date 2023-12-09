import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface StateTextAreaEditNote {
  value: string;
}

const initStateTextAreaEditNote: StateTextAreaEditNote = { value: '' };

export const textAreaEditNoteSlice = createSlice({
  name: 'textAreaEditNote',
  initialState: initStateTextAreaEditNote,
  reducers: {
    setValueTextAreaEditNote: (
      state,
      action: PayloadAction<StateTextAreaEditNote>
    ) => {
      return (state = action.payload);
    },
  },
});

export const { setValueTextAreaEditNote } = textAreaEditNoteSlice.actions;
export default textAreaEditNoteSlice.reducer;
