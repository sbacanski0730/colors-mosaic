import React from "react";
import PropTypes from "prop-types";

import StyledPaletteIcon from "./TileIcon.style.js";

const TileIcon = ({ svgIcon, tooltipLabel }) => (
  <StyledPaletteIcon>
    {svgIcon}
    <span id="tooltipLabel">{tooltipLabel}</span>
  </StyledPaletteIcon>
);

TileIcon.propTypes = {
  svgIcon: PropTypes.node.isRequired,
  tooltipLabel: PropTypes.string.isRequired,
};

export default TileIcon;
