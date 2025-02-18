import styled from "styled-components";

const StyledTileComponent = styled.div`
  background-color: ${(theme) => theme.bgColor};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  padding-bottom: 12px;

  &:hover {
    .icons-container {
      display: flex;
    }
  }

  .icons-container {
    display: none;
    flex-direction: column;
  }

  p {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.fontSize.heading2};
    padding-inline: 9px;
    padding-block: 2px;
    border-radius: 11px;
    text-transform: uppercase;

    &:hover {
      background-color: rgba(50, 50, 50, 0.15);
      cursor: pointer;
    }
  }
`;

export default StyledTileComponent;
