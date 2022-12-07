import emojiList from '../../../data/emojiList.json';
import ListItem from '../../atoms/ListItem';

import * as S from './styles';

const EmojiList = (): JSX.Element => {
  return (
    <S.Container>
      {emojiList.map(emoji => (
        <ListItem 
          title={emoji.title}
          symbol={emoji.symbol} 
        />
      ))}
    </S.Container>
  )
}

export default EmojiList;