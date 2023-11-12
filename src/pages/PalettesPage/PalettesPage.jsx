import React, { useEffect } from "react";
import StyledPalettePage from "./PalettesPage.styles.js";

import PaletteComponent from "../../components/PaletteComponent/PaletteComponent.jsx";

import useColors from "../../hooks/useColors.js";

const PalettePage = () => {
  const { paletteColors, generatePaletteColors } = useColors();

  const generateNewColorsSet = React.useCallback(
    (e) => {
      if (e.key === " ") {
        generatePaletteColors(paletteColors.length);
      }
    },
    [paletteColors],
  );

  useEffect(() => {
    document.addEventListener("keydown", generateNewColorsSet);

    return () => document.removeEventListener("keydown", generateNewColorsSet);
  }, []);

  return (
    <StyledPalettePage>
      {paletteColors.map((item) => (
        <PaletteComponent bgColor={item} key={item} />
      ))}
    </StyledPalettePage>
  );
};

export default PalettePage;
