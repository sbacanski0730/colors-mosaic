import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import StyledPrimaryComponent from "./PrimaryNavbar.styles.js";
import Button from "../Button/Button.jsx";

const PrimaryNavbar = () => (
  <StyledPrimaryComponent>
    <div className="logo-container">
      <Logo />
      <p>Mosaic</p>
    </div>
    <div className="buttons-container">
      <Button text="Sign In" contained={false} />
      <Button text="Sign Up" contained />
    </div>
  </StyledPrimaryComponent>
);

export default PrimaryNavbar;
