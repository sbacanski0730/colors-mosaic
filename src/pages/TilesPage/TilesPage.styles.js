import styled from "styled-components";

const StyledTilesPage = styled.div`
  /* background-color: orange; */
  height: 100%;

  display: grid;

  grid-template-columns: repeat(
    auto-fill,
    minmax(${({ tileWidth }) => `${tileWidth}px`}, 1fr)
  );
  grid-auto-rows: minmax(${({ tileHeight }) => `${tileHeight}px`}, 1fr);
`;

export default StyledTilesPage;
