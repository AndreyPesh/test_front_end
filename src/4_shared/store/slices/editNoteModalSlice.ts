import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Note } from '../../types/interfaces';

interface StateEditNoteModal {
  isModalOpen: boolean;
  currentNote: Note;
}

const initStateEditNoteModal: StateEditNoteModal = {
  isModalOpen: false,
  currentNote: { id: '', content: '', hashtags: null },
};

export const editNoteModalSlice = createSlice({
  name: 'editModal',
  initialState: initStateEditNoteModal,
  reducers: {
    showModal: (state, action: PayloadAction<{ note: Note }>) => {
      state.isModalOpen = true;
      state.currentNote = action.payload.note;
    },
    closeModal: () => {
      return initStateEditNoteModal;
    },
  },
});

export const { showModal, closeModal } = editNoteModalSlice.actions;
export default editNoteModalSlice.reducer;
