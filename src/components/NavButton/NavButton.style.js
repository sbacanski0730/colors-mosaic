import styled from "styled-components";

const StyledNavButton = styled.a`
  /* background-color: red; */
  /* border: 1px solid black; */

  min-width: 100px;
  color: ${({ theme }) => theme.colors.navButton.primary};
  font-size: 22px;
  text-decoration: none;
  font-weight: 300;

  border-radius: 6px;

  padding-inline: 12px;
  text-align: center;

  /* Hover Animation 1 */
  /*
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.navButton.hover.underline};
    transform: translateY(-4px);
    transform: translateX(-100%);
    transition: transform 200ms ease-in;
  }

  &:hover:after {
    transform: translateX(0);
  } */

  /* Hover Animation 2 */
  &:hover {
    background-color: ${({ theme }) => theme.colors.navButton.hover.background};
  }
`;
export default StyledNavButton;
