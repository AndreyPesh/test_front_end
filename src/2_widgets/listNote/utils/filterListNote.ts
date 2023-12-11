import { Note } from '../../../4_shared/types/interfaces';

export const filterListNoteByTags = (
  listNote: Note[],
  filterTags: string[]
): Note[] => {
  const result: Note[] = [];
  if (filterTags.length > 0) {
    listNote.forEach((note) => {
      if (note.hashtags) {
        const isIncludeTag = note.hashtags.some((hashtag) => {
          return filterTags.includes(hashtag);
        });
        isIncludeTag && result.push(note);
      }
    });
    return result;
  }
  return listNote;
};
