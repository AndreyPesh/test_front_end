import './hashtag.css';
import { REG_EXP_HASHTAG } from '../../4_shared/types/constants';

const HashTagList = ({ value }: { value: string }) => {
  const hashTags = value.match(REG_EXP_HASHTAG);
  if (hashTags) {
    return (
      <div>
        {hashTags.map((tag, index) => {
          return (
            <span key={index} className="tag">
              {tag}
            </span>
          );
        })}
      </div>
    );
  }
  return null;
};

export default HashTagList;
