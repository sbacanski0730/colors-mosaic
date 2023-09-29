import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import StyledMosaicPage from "./MosaicPage.styles.js";
import generateColorsArray from "../../helpers/generateColorsArray.js";
// eslint-disable-next-line no-unused-vars
import MosaicComponent from "../../components/MosaicComponent/MosaicComponent.jsx";

const MosaicPage = () => {
  const [colorsArray, setColorsArray] = useState([]);
  const pageRef = useRef(null);

  const [singleElementWidth, setElementWidth] = useState(0);
  const [singleElementHeight, setElementHeight] = useState(0);

  useLayoutEffect(() => {
    setElementWidth(Math.floor(pageRef.current.offsetWidth / 16));
    setElementHeight(Math.floor(pageRef.current.offsetHeight / 8));

    console.log(Math.floor(pageRef.current.offsetWidth / 16));
    console.log(Math.floor(pageRef.current.offsetHeight / 8));
  }, []);

  useEffect(() => {
    setColorsArray(generateColorsArray(18));
    console.log(colorsArray);
  }, []);

  return (
    <StyledMosaicPage
      ref={pageRef}
      elementWidth={singleElementWidth}
      elementHeight={singleElementHeight}
    >
      {colorsArray.map((item) => (
        <MosaicComponent bgcolor={item} />
      ))}
    </StyledMosaicPage>
  );
};

export default MosaicPage;
