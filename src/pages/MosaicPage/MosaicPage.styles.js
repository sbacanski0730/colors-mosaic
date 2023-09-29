import styled from "styled-components";

const StyledMosaicPage = styled.div`
  ${(props) => console.log(props)}

  border: 3px dotted purple;
  height: 100%;
  /* width: 100%; */

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(108px, 1fr));
`;
export default StyledMosaicPage;
