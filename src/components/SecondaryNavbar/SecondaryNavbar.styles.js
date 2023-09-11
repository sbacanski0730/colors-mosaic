import styled from "styled-components";

const StyledSecondaryNavbar = styled.div`
  width: 100%;
  height: 45px;
  background-color: ${({ theme }) => theme.colors.background.primary};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: var(--navbar-horizontal-padding);

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  .buttons-container {
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .links-container {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }

    span {
      display: block;
      background-color: #c1c1c1;
      /* background-color: black; */
      width: 1px;
      height: 30px;
    }
    svg {
      padding-inline: 5px;
      width: 35px;
      height: 35px;
      path {
        fill: ${({ theme }) => theme.colors.button.secondary};
      }

      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) =>
          theme.colors.navButton.hover.background};
      }
    }
  }
`;

export default StyledSecondaryNavbar;
