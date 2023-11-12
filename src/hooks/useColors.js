import React, { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import generateColorsArray from "../helpers/generateColorsArray.js";

export const ColorsContext = createContext({});

export const ColorsProvider = ({ children }) => {
  const [paletteColors, setPaletteColors] = useState(generateColorsArray(6));
  const [tilesColors, setTilesColors] = useState(generateColorsArray(32));
  const [mosaicColors, setMosaicColors] = useState(generateColorsArray(128));

  const generatePaletteColors = (arrayLength) => {
    setPaletteColors(generateColorsArray(arrayLength));
  };
  const generateTilesColors = (arrayLength) => {
    setTilesColors(generateColorsArray(arrayLength));
  };
  const generateMosaicColors = (arrayLength) => {
    setMosaicColors(generateColorsArray(arrayLength));
  };

  const hookValuesAndFunctions = useMemo(
    () => ({
      paletteColors,
      tilesColors,
      mosaicColors,
      generatePaletteColors,
      generateTilesColors,
      generateMosaicColors,
    }),
    [paletteColors, tilesColors, mosaicColors, generateColorsArray],
  );
  return (
    <ColorsContext.Provider value={hookValuesAndFunctions}>
      {children}
    </ColorsContext.Provider>
  );
};

ColorsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useColors = () => {
  const colors = useContext(ColorsContext);

  if (!colors) throw new Error("useColors has to be inside ColorsProvider");

  return colors;
};

export default useColors;
