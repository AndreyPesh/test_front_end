import { useState } from 'react';
import HighlightWithinTextarea from 'react-highlight-within-textarea';

const REG_EXP_HASHTAG = /#[a-z0-9_]+/g

const TextArea = () => {
  const [value, setValue] = useState('X Y Z and then XYZ');
  //@ts-ignore
  const onChange = (value: string) => {
    const hashtags = value.match(REG_EXP_HASHTAG)
    console.log(hashtags);
    
    setValue(value);
  }
  return (
    <div style={{background: '#fff', color: '#000'}}>
      <HighlightWithinTextarea
        value={value}
        highlight={REG_EXP_HASHTAG}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
