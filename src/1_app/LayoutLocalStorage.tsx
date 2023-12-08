import { ReactNode, useEffect } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import {
  useAppDispatch,
  useAppSelector,
} from '../4_shared/store/hooks/manageStore';
import { setListNote } from '../4_shared/store/slices/noteSlice';
import { Note } from '../4_shared/types/interfaces';

const NAME_KEY_LOCALSTORAGE = 'notes_list_data_storage';
const EMPTY_LENGTH = 0;

const LayoutLocalStorage = ({ children }: { children: ReactNode }) => {
  const notes = useAppSelector((state) => state.notes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const notesFromLocalStorage = reactLocalStorage.getObject(
      NAME_KEY_LOCALSTORAGE
    );

    if (notesFromLocalStorage && Array.isArray(notesFromLocalStorage)) {
      dispatch(setListNote(notesFromLocalStorage as Note[]));
    }
  }, [dispatch]);

  useEffect(() => {
    if (notes.length > EMPTY_LENGTH) {
      reactLocalStorage.setObject(NAME_KEY_LOCALSTORAGE, notes);
    }
  }, [notes]);

  return <>{children}</>;
};

export default LayoutLocalStorage;
