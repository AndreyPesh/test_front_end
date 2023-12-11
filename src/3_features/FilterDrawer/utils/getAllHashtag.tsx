import { Note } from '../../../4_shared/types/interfaces';

export const getAllHashtag = (noteList: Note[]) => {
  return noteList.reduce<string[]>((hashtagAcc, note) => {
    if (note.hashtags) {
      hashtagAcc.push(...note.hashtags);
    }
    return hashtagAcc;
  }, []);
};
