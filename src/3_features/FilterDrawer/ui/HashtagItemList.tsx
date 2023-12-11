import { useAppDispatch } from '../../../4_shared/store/hooks/manageStore';
import { addFilterTag } from '../../../4_shared/store/slices/filterSlice';

const HashtagItemList = ({
  tagsList,
  filterTags,
}: {
  tagsList: string[];
  filterTags: string[];
}) => {
  const dispatch = useAppDispatch();

  const addTagToFilterHandler = (hashtag: string) => {
    dispatch(addFilterTag(hashtag));
  };

  return (
    <div className="tag_list">
      <h3>All tags:</h3>
      {tagsList.map((hashtag, index) => {
        if (!filterTags.includes(hashtag)) {
          return (
            <span
              key={index}
              className="filter_tag"
              onClick={() => addTagToFilterHandler(hashtag)}
            >
              {hashtag}
            </span>
          );
        }
        return null;
      })}
    </div>
  );
};

export default HashtagItemList;
