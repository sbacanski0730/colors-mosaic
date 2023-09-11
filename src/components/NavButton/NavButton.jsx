import React from "react";
import PropTypes from "prop-types";
import StyledNavButton from "./NavButton.style.js";

const NavButton = ({ location, label }) => (
  <StyledNavButton href={location} data-testid="nav">
    {label}
  </StyledNavButton>
);

NavButton.propTypes = {
  location: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavButton;
