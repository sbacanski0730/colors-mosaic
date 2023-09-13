import React from "react";
import PropTypes from "prop-types";

import StyledPaletteIcon from "./PaletteIcon.styles.js";

const PaletteIcon = ({ svgIcon, tooltipLabel }) => (
  <StyledPaletteIcon>
    {svgIcon}
    <span id="tooltipLabel">{tooltipLabel}</span>
  </StyledPaletteIcon>
);

PaletteIcon.propTypes = {
  svgIcon: PropTypes.node.isRequired,
  tooltipLabel: PropTypes.string.isRequired,
};

export default PaletteIcon;
