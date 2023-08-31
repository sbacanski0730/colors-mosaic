import styled from "styled-components";

const StyledPrimaryComponent = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.elements.primary};
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.text.secondary};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--navbar-horizontal-padding);

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    p {
      font-size: ${({ theme }) => theme.fontSize.heading};
      font-weight: 300;
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
