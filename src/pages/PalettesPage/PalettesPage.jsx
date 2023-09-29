import React from "react";
import PaletteComponent from "../../components/PaletteComponent/PaletteComponent.jsx";
import StyledPalettePage from "./PalettesPage.styles.js";

const PalettePage = () => (
  <StyledPalettePage>
    <PaletteComponent bgColor="#45ab45" />
    <PaletteComponent bgColor="#00abaa" />
    <PaletteComponent bgColor="#154599" />
    <PaletteComponent bgColor="#150099" />
    <PaletteComponent bgColor="#159500" />
    <PaletteComponent bgColor="#159555" />
  </StyledPalettePage>
);

export default PalettePage;
