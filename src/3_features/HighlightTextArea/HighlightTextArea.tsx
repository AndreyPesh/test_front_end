import './highlightTextArea.css';
import { useState } from 'react';
import HighlightWithinTextarea from 'react-highlight-within-textarea';

const REG_EXP_HASHTAG = /#[a-z0-9_]+/g;

const HighlightTextArea = ({ initValue }: { initValue: string }) => {
  const [value, setValue] = useState(initValue);

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <div className="area">
      <HighlightWithinTextarea
        value={value}
        placeholder='Input your note'
        highlight={[
          {
            highlight: REG_EXP_HASHTAG,
            className: 'blue',
          },
        ]}
        onChange={onChange}
      />
    </div>
  );
};

export default HighlightTextArea;
