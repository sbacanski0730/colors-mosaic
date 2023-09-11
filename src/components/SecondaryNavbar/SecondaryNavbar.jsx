import React from "react";
import StyledSecondaryNavbar from "./SecondaryNavbar.styles.js";
import { ReactComponent as MenuIcon } from "../../assets/three-line-menu.svg";
import NavButton from "../NavButton/NavButton.jsx";

const SecondaryNavbar = () => (
  <StyledSecondaryNavbar>
    <p>Press space to generate new colors</p>
    <div className="buttons-container">
      <div className="links-container">
        {/* <a href="/">Mosaic</a> */}
        {/* <a href="/">Tiles</a> */}
        {/* <a href="/">Palette</a> */}
        <NavButton location="/" label="Mosaic" />
        <NavButton location="/" label="Tiles" />
        <NavButton location="/" label="Palette" />
      </div>
      <span />
      <MenuIcon />
    </div>
  </StyledSecondaryNavbar>
);

export default SecondaryNavbar;
