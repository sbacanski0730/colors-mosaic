import React, {
  useEffect,
  useState,
  useLayoutEffect,
  useRef,
  useContext,
} from "react";
import StyledTilesPage from "./TilesPage.styles.js";

import TileComponent from "../../components/TileComponent/TileComponent.jsx";

import ColorsContext from "../../contexts/ColorsContext.jsx";

const TilesPage = () => {
  const pageRef = useRef(null);
  const { colorsCollections, generateNewColorsForCollection } =
    useContext(ColorsContext);

  const [singleTileWidth, setTileWidth] = useState(0);
  const [singleTileHeight, setTileHeight] = useState(0);

  useLayoutEffect(() => {
    setTileWidth(Math.floor(pageRef.current.offsetWidth / 8));
    setTileHeight(Math.floor(pageRef.current.offsetHeight / 4));
  }, []);

  const generateNewColorsSet = React.useCallback(
    (e) => {
      if (e.key === " ") {
        generateNewColorsForCollection(
          "tilesColors",
          colorsCollections.tilesColors.length,
        );
      }
    },
    [colorsCollections.tilesColors],
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
      {colorsCollections.tilesColors.map((item) => (
        <TileComponent bgColor={item} key={item} />
      ))}
    </StyledTilesPage>
  );
};

export default TilesPage;
