import styled from "styled-components";

const StyledPaletteComponent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  padding-bottom: 45px;

  background-color: ${({ bgColor }) => bgColor};

  &:hover {
    .icons-container {
      display: flex;
    }
  }

  .icons-container {
    margin-bottom: 30px;

    display: none;

    flex-direction: column;
    row-gap: 20px;
  }

  p {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.fontSize.heading1};
    padding-inline: 9px;
    padding-block: 2px;
    border-radius: 11px;

    &:hover {
      background-color: rgba(50, 50, 50, 0.15);
      cursor: pointer;
    }
  }
`;

export default StyledPaletteComponent;
