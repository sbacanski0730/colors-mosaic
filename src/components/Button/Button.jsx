import React from "react";
import PropTypes from "prop-types";
import StyledButton from "./Button.styles.js";

const Button = ({ text, contained = false }) => (
  <StyledButton $contained={contained}>{text}</StyledButton>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  contained: PropTypes.bool,
};

Button.defaultProps = {
  contained: false,
};

export default Button;
