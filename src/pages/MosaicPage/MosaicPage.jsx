import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import StyledMosaicPage from "./MosaicPage.styles.js";
import MosaicComponent from "../../components/MosaicComponent/MosaicComponent.jsx";
import generateColorsArray from "../../helpers/generateColorsArray.js";

const MosaicPage = () => {
  const [colorsArray, setColorsArray] = useState([]);
  const pageRef = useRef(null);

  const [singleElementWidth, setElementWidth] = useState(0);
  const [singleElementHeight, setElementHeight] = useState(0);

  useLayoutEffect(() => {
    setElementWidth(Math.floor(pageRef.current.offsetWidth / 16));
    setElementHeight(Math.floor(pageRef.current.offsetHeight / 8));
  }, []);

  useEffect(() => {
    setColorsArray(generateColorsArray(128));
  }, []);

  return (
    <StyledMosaicPage
      ref={pageRef}
      elementWidth={singleElementWidth}
      elementHeight={singleElementHeight}
    >
      {colorsArray.map((item) => (
        <MosaicComponent bgcolor={item} key={item} />
      ))}
    </StyledMosaicPage>
  );
};

export default MosaicPage;
