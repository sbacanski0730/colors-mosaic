import styled from "styled-components";

const StyledPaletteIcon = styled.div`
  /* background-color: purple; */

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    span {
      visibility: visible;
      opacity: 1;
    }
  }

  svg {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.fontSize.heading1};
    width: 30px;
    height: 30px;
  }

  span {
    position: absolute;
    top: -90%;
    z-index: 100;

    border-radius: 6px;
    white-space: nowrap;
    padding-block: 3px;
    padding-inline: 7px;

    background-color: #000;
    color: #fff;

    visibility: hidden;
    transition: opacity 0.2s 500ms;

    opacity: 0;
  }
`;

export default StyledPaletteIcon;
