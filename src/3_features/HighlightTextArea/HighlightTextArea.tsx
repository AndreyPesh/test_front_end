import './highlightTextArea.css';
import { useEffect } from 'react';
import HighlightWithinTextarea from 'react-highlight-within-textarea';
import {
  useAppDispatch,
  useAppSelector,
} from '../../4_shared/store/hooks/manageStore';
import { setValueTextAreaEditNote } from '../../4_shared/store/slices/textAreaSlice';

const REG_EXP_HASHTAG = /#[a-z0-9_]+/g;

const HighlightTextArea = ({ initValue }: { initValue: string }) => {
  const { value, hashTags } = useAppSelector((state) => state.textArea);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const hashTags = initValue.match(REG_EXP_HASHTAG);
    dispatch(setValueTextAreaEditNote({ value: initValue, hashTags }));
  }, [initValue]);

  const onChangeHandler = (value: string) => {
    const hashTags = value.match(REG_EXP_HASHTAG);
    dispatch(setValueTextAreaEditNote({ value, hashTags }));
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
      {hashTags &&
        hashTags.map((tag, index) => {
          return <span key={index}> {tag} </span>;
        })}
    </>
  );
};

export default HighlightTextArea;
