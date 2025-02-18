import React from "react";
import PropTypes from "prop-types";
import { PiEyeLight } from "react-icons/pi";
import StyledMosaicComponent from "./MosaicComponent.styles.js";
import ComponentIcon from "../ComponentIcon/ComponentIcon.jsx";

const MosaicComponent = ({ bgcolor }) => (
  <StyledMosaicComponent bgcolor={bgcolor}>
    <div className="icons-container">
      <ComponentIcon
        svgIcon={<PiEyeLight />}
        tooltipLabel="Show Color Details"
      />
    </div>
  </StyledMosaicComponent>
);

MosaicComponent.propTypes = {
  bgcolor: PropTypes.string.isRequired,
};

export default MosaicComponent;
