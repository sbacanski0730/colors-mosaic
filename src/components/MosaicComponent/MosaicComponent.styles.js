import styled from "styled-components";

const StyledMosaicComponent = styled.div`
  background-color: ${(props) => props.bgcolor};

  display: flex;

  align-items: center;
  justify-content: center;

  .icons-container {
    display: none;
  }

  &:hover {
    .icons-container {
      display: flex;
    }
  }
`;
export default StyledMosaicComponent;
