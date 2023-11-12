import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import StyledTilesPage from "./TilesPage.styles.js";

import TileComponent from "../../components/TileComponent/TileComponent.jsx";

import useColors from "../../hooks/useColors.js";

const TilesPage = () => {
  const pageRef = useRef(null);

  const { tilesColors, generateTilesColors } = useColors();

  const [singleTileWidth, setTileWidth] = useState(0);
  const [singleTileHeight, setTileHeight] = useState(0);

  useLayoutEffect(() => {
    setTileWidth(Math.floor(pageRef.current.offsetWidth / 8));
    setTileHeight(Math.floor(pageRef.current.offsetHeight / 4));
  }, []);

  const generateNewColorsSet = React.useCallback(
    (e) => {
      if (e.key === " ") {
        generateTilesColors(tilesColors.length);
      }
    },
    [tilesColors],
  );

  useEffect(() => {
    document.addEventListener("keydown", generateNewColorsSet);

    return () => document.removeEventListener("keydown", generateNewColorsSet);
  }, []);

  return (
    <StyledTilesPage
      ref={pageRef}
      tileWidth={singleTileWidth}
      tileHeight={singleTileHeight}
    >
      {tilesColors.map((item) => (
        <TileComponent bgColor={item} key={item} />
      ))}
    </StyledTilesPage>
  );
};

export default TilesPage;
