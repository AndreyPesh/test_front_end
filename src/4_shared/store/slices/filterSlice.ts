import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface StateFilterNote {
  tags: string[];
}

const initStateFilterNote: StateFilterNote = { tags: [] };

export const filterNoteSlice = createSlice({
  name: 'filterNote',
  initialState: initStateFilterNote,
  reducers: {
    addFilterTag: (state, action: PayloadAction<string>) => {
      state.tags.push(action.payload);
    },
    resetFilter: (state) => {
      state.tags = [];
    },
  },
});

export const { addFilterTag } = filterNoteSlice.actions;
export default filterNoteSlice.reducer;
