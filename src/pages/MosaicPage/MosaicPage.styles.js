import styled from "styled-components";

const StyledMosaicPage = styled.div`
  height: 100%;

  display: grid;

  grid-template-columns: repeat(
    auto-fit,
    minmax(${({ elementWidth }) => `${elementWidth}px`}, 1fr)
  );

  grid-auto-rows: minmax(${({ elementHeight }) => `${elementHeight}px`}, 1fr);
`;
export default StyledMosaicPage;
