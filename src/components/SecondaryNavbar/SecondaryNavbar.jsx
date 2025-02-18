import React from "react";
import StyledSecondaryNavbar from "./SecondaryNavbar.styles.js";
import { ReactComponent as MenuIcon } from "../../assets/three-line-menu.svg";
import NavButton from "../NavButton/NavButton.jsx";

const SecondaryNavbar = () => (
  <StyledSecondaryNavbar>
    <p>Press space to generate new colors</p>
    <div className="buttons-container">
      <div className="links-container">
        <NavButton location="/mosaic" label="Mosaic" />
        <NavButton location="/tiles" label="Tiles" />
        <NavButton location="/palette" label="Palette" />
      </div>
      <span />
      <MenuIcon />
    </div>
  </StyledSecondaryNavbar>
);

export default SecondaryNavbar;
