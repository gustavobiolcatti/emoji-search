import emojiList from '../../data/emojiList.json';
import Emoji from "../../models/emoji";

type listEmojiSearchParams = {
  param: string;
}


const useEmojiSearch = (
  { param }: listEmojiSearchParams
): Emoji[] | undefined  => {
  if (param.length < 3) return undefined;

  const response = emojiList.filter(item => {
    const itemKeywords = item.keywords.toLocaleLowerCase();

    return itemKeywords.includes(param.toLocaleLowerCase());
  });

  return response;
}

export default useEmojiSearch;