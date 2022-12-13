import { InputHTMLAttributes } from "react";

import * as S from "./styles";

type SearchProps = InputHTMLAttributes<HTMLInputElement> & {
}

const Search = ({ ...rest }: SearchProps): JSX.Element => {
  return <S.SearchInput {...rest} />
}

export default Search;