import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import StyledTilesPage from "./TilesPage.styles.js";
import TileComponent from "../../components/TileComponent/TileComponent.jsx";
import generateColorsArray from "../../helpers/generateColorsArray.js";

const TilesPage = () => {
  const pageRef = useRef(null);
  const [tilesColors, setTilesColors] = useState([]);
  const [singleTileWidth, setTileWidth] = useState(0);
  const [singleTileHeight, setTileHeight] = useState(0);

  useLayoutEffect(() => {
    setTileWidth(Math.floor(pageRef.current.offsetWidth / 8));
    setTileHeight(Math.floor(pageRef.current.offsetHeight / 4));
  }, []);

  useEffect(() => {
    const colors = generateColorsArray(32);
    setTilesColors(colors);
  }, []);

  return (
    <StyledTilesPage
      ref={pageRef}
      tileWidth={singleTileWidth}
      tileHeight={singleTileHeight}
    >
      {
        // TODO: normaly this is not how colors will be generated
      }
      {tilesColors.map((item) => (
        <TileComponent bgColor={item} key={item} />
      ))}
    </StyledTilesPage>
  );
};

export default TilesPage;
