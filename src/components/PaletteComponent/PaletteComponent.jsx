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
import ComponentIcon from "../ComponentIcon/ComponentIcon.jsx";

const PaletteComponent = ({ bgColor }) => (
  <StyledPaletteComponent bgColor={bgColor}>
    <div className="icons-container">
      <ComponentIcon svgIcon={<PiEyeLight />} tooltipLabel="Show Details" />
      <ComponentIcon
        svgIcon={<PiHeartBold />}
        tooltipLabel="Add to favorites"
      />
      <ComponentIcon svgIcon={<PiCopySimple />} tooltipLabel="Copy Color" />
      <ComponentIcon svgIcon={<PiTrashSimple />} tooltipLabel="Delete" />
      <ComponentIcon
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
