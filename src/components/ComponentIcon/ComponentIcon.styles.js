import styled, { keyframes } from "styled-components";

const showTooltip = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0;
    transform: translateY(0);
  }
  80%{
    opacity: 1;
  }
  100%{
    opacity: 1;
    transform: translateY(-10px);
  }
`;

const StyledComponentIcon = styled.div`
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
      animation: ${showTooltip} 1s forwards;
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
    top: -80%;
    z-index: 100;

    border-radius: 6px;
    white-space: nowrap;
    /* width: max-content; */
    padding-block: 3px;
    padding-inline: 7px;

    background-color: ${({ theme }) => theme.colors.elements.tooltipColor};
    color: #fff;

    visibility: hidden;
    opacity: 0;
    /*
    visibility: visible;

    opacity: 1; */

    &::after {
      content: "";

      width: 10px;
      height: 10px;

      position: absolute;
      bottom: 0;
      left: 50%;

      background-color: ${({ theme }) => theme.colors.elements.tooltipColor};
      transform: translateX(-50%) translateY(50%) rotate(45deg);
      z-index: -1;
    }
  }
`;

export default StyledComponentIcon;
