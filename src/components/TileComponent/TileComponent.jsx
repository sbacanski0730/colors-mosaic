import React from "react";
import PropTypes from "prop-types";

import {
  PiCopySimple,
  PiHeartBold,
  PiTrashSimple,
  PiArrowsOutCardinalThin,
} from "react-icons/pi";
import StyledTileComponent from "./TileComponent.styles.js";
import TileIcon from "../TileIcon/TileIcon.jsx";

const TileComponent = ({ bgColor }) => (
  <StyledTileComponent bgColor={bgColor}>
    <div className="icons-container">
      <TileIcon svgIcon={<PiTrashSimple />} tooltipLabel="Delete" />
      <TileIcon svgIcon={<PiHeartBold />} tooltipLabel="Add to favorite" />
      <TileIcon svgIcon={<PiCopySimple />} tooltipLabel="Copy color's code" />
      <TileIcon svgIcon={<PiArrowsOutCardinalThin />} tooltipLabel="copy" />
    </div>
    <p>{bgColor}</p>
  </StyledTileComponent>
);

TileComponent.propTypes = {
  bgColor: PropTypes.string.isRequired,
};

export default TileComponent;
