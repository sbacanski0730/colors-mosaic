import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavButton = styled(NavLink)`
  user-select: none;
  position: relative;

  min-width: 100px;
  color: ${({ theme }) => theme.colors.navButton.primary};
  font-size: 22px;
  text-decoration: none;
  font-weight: 300;

  border-radius: 6px;

  padding-inline: 12px;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.navButton.hover.background};
  }

  &.active {
    &:after {
      content: "";
      height: 1px;
      width: 100%;
      background-color: black;
      position: absolute;

      bottom: 0;
      left: 0;

      transform: translateY(-4px) scaleX(85%);
    }
  }
`;
export default StyledNavButton;
