import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import generateColorsArray from "../helpers/generateColorsArray.js";
import ColorsContext from "../contexts/ColorsContext.jsx";

const ColorsProvider = ({ children }) => {
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

export default ColorsProvider;
