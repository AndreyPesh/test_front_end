import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface StateFilterNote {
  isFilterApplied: boolean;
  tags: string[];
}

const initStateFilterNote: StateFilterNote = {
  isFilterApplied: false,
  tags: [],
};

export const filterNoteSlice = createSlice({
  name: 'filterNote',
  initialState: initStateFilterNote,
  reducers: {
    addFilterTag: (state, action: PayloadAction<string>) => {
      state.tags.push(action.payload);
    },
    deleteFilterTag: (state, action: PayloadAction<string>) => {
      state.tags = [...state.tags].filter((tag) => tag !== action.payload);
    },
    applyFilter: (state) => {
      state.isFilterApplied = true;
    },
    resetFilter: (state) => {
      return state = initStateFilterNote;
    },
  },
});

export const { addFilterTag, deleteFilterTag, applyFilter, resetFilter } =
  filterNoteSlice.actions;
export default filterNoteSlice.reducer;
