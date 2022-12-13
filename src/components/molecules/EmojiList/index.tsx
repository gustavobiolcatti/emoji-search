import Emoji from '../../../models/emoji';

import ListItem from '../../atoms/ListItem';

type EmojiListProps = {
  emojiList: Emoji[];
}

const EmojiList = (
  { emojiList }: EmojiListProps
): JSX.Element => {
  return (
    <>
      {emojiList.map(emoji => (
        <ListItem 
          title={emoji.title}
          symbol={emoji.symbol} 
        />
      ))}
    </>
  )
}

export default EmojiList;