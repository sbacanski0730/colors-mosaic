import React from "react";
import PropTypes from "prop-types";

import StyledPaletteIcon from "./ComponentIcon.styles.js";

const ComponentIcon = ({ svgIcon, tooltipLabel }) => (
  <StyledPaletteIcon>
    {svgIcon}
    <span id="tooltipLabel">{tooltipLabel}</span>
  </StyledPaletteIcon>
);

ComponentIcon.propTypes = {
  svgIcon: PropTypes.node.isRequired,
  tooltipLabel: PropTypes.string,
};

ComponentIcon.defaultProps = {
  tooltipLabel: "_here_tooltip_label_",
};

export default ComponentIcon;
