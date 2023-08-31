import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ $contained, theme }) =>
    $contained ? theme.colors.button.background : "transparent"};
  color: ${({ theme, $contained }) =>
    $contained ? theme.colors.button.primary : theme.colors.button.secondary};
  border-radius: 5px;
  padding-block: 4px;
  padding-inline: 7px;
  font-size: 27px;

  &:hover {
    cursor: pointer;
    background-color: ${({ $contained, theme }) =>
      $contained ? theme.colors.button.hover.background : "transparent"};
    color: ${({ theme, $contained }) =>
      $contained ? "" : theme.colors.button.hover.text};
  }
`;

export default StyledButton;
