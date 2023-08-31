import React from "react";
import PrimaryNavbar from "./components/PrimaryNavbar/PrimaryNavbar.jsx";
import StylesProvider from "./provider/StylesProvider.js";

const App = () => (
  <StylesProvider>
    <PrimaryNavbar />
  </StylesProvider>
);

export default App;
