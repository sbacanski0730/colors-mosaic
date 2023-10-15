import React, { useContext, useEffect } from "react";
import StyledPalettePage from "./PalettesPage.styles.js";

import PaletteComponent from "../../components/PaletteComponent/PaletteComponent.jsx";

import ColorsContext from "../../contexts/ColorsContext.jsx";

const PalettePage = () => {
  const { colorsCollections, generateNewColorsForCollection } =
    useContext(ColorsContext);

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
