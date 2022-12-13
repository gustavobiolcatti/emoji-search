import { useEffect, useState } from "react";

import emojiListData from "../../data/emojiList.json";

import useEmojiSearch from "../../requests/queries/emoji-search";

import Emoji from "../../models/emoji";

import Search from "../../components/atoms/Search";
import EmojiList from "../../components/molecules/EmojiList";

import * as S from "./styles"

const Home = (): JSX.Element => {
  const [searchParam, setSearchParam] = useState("");
  const [emojiList, setEmojiList] = useState<Emoji[]>(emojiListData);
  const [filteredEmojiList, setFilteredEmojiList] = useState<Emoji[] | undefined>();

  useEffect(() => {
    const emojiListResponse = useEmojiSearch({param: searchParam});

    setFilteredEmojiList(emojiListResponse);
  }, [searchParam])
  
  return (
    <S.Container>
      <Search 
        value={searchParam}
        onChange={e => setSearchParam(e.target.value)}
      />
      <EmojiList 
        emojiList={filteredEmojiList || emojiList} 
      />
    </S.Container>
  )
}

export default Home;