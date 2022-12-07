import * as S from './styles';

type ListItemProps = {
  title: string,
  symbol: string,
  // keywords: string,
}

const ListItem = ({ title, symbol }: ListItemProps): JSX.Element => {
  return (
    <S.Container>
      <S.Emoji>{symbol}</S.Emoji>
      
      <S.EmojiName>{title}</S.EmojiName>
    </S.Container>
  )
};

export default ListItem;