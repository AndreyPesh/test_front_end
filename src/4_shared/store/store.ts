import { configureStore } from '@reduxjs/toolkit';
import notesReducer from '../../2_widgets/note/store/noteSlice';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
