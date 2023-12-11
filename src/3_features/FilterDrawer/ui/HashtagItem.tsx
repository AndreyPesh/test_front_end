import { useAppDispatch } from '../../../4_shared/store/hooks/manageStore';
import { addFilterTag } from '../../../4_shared/store/slices/filterSlice';

const HashtagItem = ({ hashtag }: { hashtag: string }) => {
  const dispatch = useAppDispatch();

  const addTagToFilterHandler = (tag: string) => {
    dispatch(addFilterTag(hashtag));
  };

  return (
    <span className="filter_tag" onClick={() => addTagToFilterHandler(hashtag)}>
      {hashtag}
    </span>
  );
};

export default HashtagItem;
