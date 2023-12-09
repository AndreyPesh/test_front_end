import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './slices/noteSlice';
import editNoteModalReducer from './slices/editNoteModalSlice';
import textAreaReducer from './slices/textAreaSlice';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    editModal: editNoteModalReducer,
    textArea: textAreaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
