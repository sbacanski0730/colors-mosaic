import React, { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import generateColorsArray from "../helpers/generateColorsArray.js";

export const ColorsContext = createContext({});

export const ColorsProvider = ({ children }) => {
  const [colorsCollections, setColorsCollections] = useState({
    paletteColors: generateColorsArray(6),
    tilesColors: generateColorsArray(32),
    mosaicColors: generateColorsArray(128),
  });

  const generateNewColorsForCollection = (collectionName, n) => {
    setColorsCollections({
      ...colorsCollections,
      [collectionName]: generateColorsArray(n),
    });
  };

  const contextValue = useMemo(
    () => ({ colorsCollections, generateNewColorsForCollection }),
    [
      colorsCollections.paletteColors,
      colorsCollections.tilesColors,
      colorsCollections.mosaicColors,
      generateColorsArray,
    ],
  );
  return (
    <ColorsContext.Provider
      value={
        // colorsCollections,
        // generateNewColorsForCollection,
        contextValue
      }
    >
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