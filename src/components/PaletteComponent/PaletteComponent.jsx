import React from "react";
import PropTypes from "prop-types";
import {
  PiCopySimple,
  PiHeartBold,
  PiEyeLight,
  PiTrashSimple,
  PiArrowsOutCardinalThin,
} from "react-icons/pi";
import StyledPaletteComponent from "./PaletteComponent.styles.js";
import PaletteIcon from "../PaletteIcon/PaletteIcon.jsx";

const PaletteComponent = ({ bgColor }) => (
  <StyledPaletteComponent bgColor={bgColor}>
    <div className="icons-container">
      <PaletteIcon svgIcon={<PiEyeLight />} tooltipLabel="Show Details" />
      <PaletteIcon svgIcon={<PiHeartBold />} tooltipLabel="Add to favorites" />
      <PaletteIcon svgIcon={<PiCopySimple />} tooltipLabel="Copy Color" />
      <PaletteIcon svgIcon={<PiTrashSimple />} tooltipLabel="Delete" />
      <PaletteIcon
        svgIcon={<PiArrowsOutCardinalThin />}
        tooltipLabel="Move Color"
      />
    </div>
    <p>{bgColor.toUpperCase()}</p>
  </StyledPaletteComponent>
);

PaletteComponent.propTypes = {
  bgColor: PropTypes.string.isRequired,
};

export default PaletteComponent;
