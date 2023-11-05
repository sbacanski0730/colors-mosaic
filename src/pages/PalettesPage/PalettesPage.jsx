import React, { useEffect } from "react";
import StyledPalettePage from "./PalettesPage.styles.js";

import PaletteComponent from "../../components/PaletteComponent/PaletteComponent.jsx";

// import ColorsContext from "../../contexts/ColorsContext.jsx";
import useColors from "../../hooks/useColors.js";

const PalettePage = () => {
  const { colorsCollections, generateNewColorsForCollection } = useColors();

  const generateNewColorsSet = React.useCallback(
    (e) => {
      if (e.key === " ") {
        generateNewColorsForCollection(
          "paletteColors",
          colorsCollections.paletteColors.length,
        );
      }
    },
    [colorsCollections.paletteColors],
  );

  useEffect(() => {
    document.addEventListener("keydown", generateNewColorsSet);

    return () => document.removeEventListener("keydown", generateNewColorsSet);
  }, []);

  return (
    <StyledPalettePage>
      {colorsCollections.paletteColors.map((item) => (
        <PaletteComponent bgColor={item} key={item} />
      ))}
    </StyledPalettePage>
  );
};

export default PalettePage;
