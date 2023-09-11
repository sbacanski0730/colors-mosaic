import React from "react";
import PrimaryNavbar from "./components/PrimaryNavbar/PrimaryNavbar.jsx";
import StylesProvider from "./providers/StylesProvider.js";
import SecondaryNavbar from "./components/SecondaryNavbar/SecondaryNavbar.jsx";

const App = () => (
  <StylesProvider>
    <PrimaryNavbar />
    <SecondaryNavbar />
  </StylesProvider>
);

export default App;
