import styled from "styled-components";

const StyledPrimaryComponent = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.elements.border};
  background-color: ${({ theme }) => theme.colors.background.primary};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: var(--navbar-horizontal-padding);

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    p {
      font-size: ${({ theme }) => theme.fontSize.heading2};
      color: ${({ theme }) => theme.colors.text.primary};
      font-weight: 300;
      user-select: none;
    }

    svg {
      height: 35px;
    }
  }

  .buttons-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
export default StyledPrimaryComponent;
