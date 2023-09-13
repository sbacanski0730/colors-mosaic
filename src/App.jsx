import React from "react";
import StylesProvider from "./providers/StylesProvider.js";
import MainLayout from "./layouts/MainLayout.jsx";
import PalettePage from "./pages/PalettePage/PalettePage.jsx";

const App = () => (
  <StylesProvider>
    <MainLayout>
      <PalettePage />
    </MainLayout>
  </StylesProvider>
);

export default App;
