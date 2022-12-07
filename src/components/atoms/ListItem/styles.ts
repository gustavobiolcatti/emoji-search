import styled from "styled-components";

import colors from "../../../assets/color";

export const Container = styled.div`
  display: flex;
  margin-top: .5em;
  padding: .5em 1em;

  align-items: center;

  background-color: ${colors["light-gray"]};

  border: 5px solid ${colors.transparent};
  border-radius: .3em;

  font-size: 2em;

  :hover {
    border-color: ${colors.gray};
    cursor: pointer;
  }
`;

export const Emoji = styled.span`
`;

export const EmojiName = styled.span`
  margin-left: 1em;
`;