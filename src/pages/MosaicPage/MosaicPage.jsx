import React, {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
  useCallback,
} from "react";
import StyledMosaicPage from "./MosaicPage.styles.js";

import MosaicComponent from "../../components/MosaicComponent/MosaicComponent.jsx";

import useColors from "../../hooks/useColors.js";

const MosaicPage = () => {
  const pageRef = useRef(null);
  const { colorsCollections, generateNewColorsForCollection } = useColors();

  const [singleElementWidth, setElementWidth] = useState(0);
  const [singleElementHeight, setElementHeight] = useState(0);

  useLayoutEffect(() => {
    setElementWidth(Math.floor(pageRef.current.offsetWidth / 16));
    setElementHeight(Math.floor(pageRef.current.offsetHeight / 8));
  }, []);

  const generateNewColorsSet = useCallback(
    (e) => {
      if (e.key === " ") {
        generateNewColorsForCollection(
          "mosaicColors",
          colorsCollections.mosaicColors.length,
        );
      }
    },
    [colorsCollections.mosaicColors],
  );

  useEffect(() => {
    document.addEventListener("keydown", generateNewColorsSet);
    return () => document.removeEventListener("keydown", generateNewColorsSet);
  }, []);

  return (
    <StyledMosaicPage
      ref={pageRef}
      elementWidth={singleElementWidth}
      elementHeight={singleElementHeight}
    >
      {colorsCollections.mosaicColors.map((item) => (
        <MosaicComponent bgcolor={item} key={item} />
      ))}
    </StyledMosaicPage>
  );
};

export default MosaicPage;
