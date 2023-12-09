import './highlightTextArea.css';
import { useEffect } from 'react';
import HighlightWithinTextarea from 'react-highlight-within-textarea';
import {
  useAppDispatch,
  useAppSelector,
} from '../../4_shared/store/hooks/manageStore';
import { setValueTextAreaEditNote } from '../../4_shared/store/slices/textAreaSlice';
import { REG_EXP_HASHTAG } from '../../4_shared/types/constants';
import HashTagList from '../hashTags/HashTagList';

const HighlightTextArea = ({ initValue }: { initValue: string }) => {
  const { value } = useAppSelector((state) => state.textArea);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setValueTextAreaEditNote({ value: initValue }));
  }, [initValue, dispatch]);

  const onChangeHandler = (value: string) => {
    dispatch(setValueTextAreaEditNote({ value }));
  };

  return (
    <>
      <div className="area">
        <HighlightWithinTextarea
          value={value}
          placeholder="Input your note"
          highlight={[
            {
              highlight: REG_EXP_HASHTAG,
              className: 'blue',
            },
          ]}
          onChange={onChangeHandler}
        />
      </div>
      <HashTagList value={value} />
    </>
  );
};

export default HighlightTextArea;
