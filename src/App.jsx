import React from "react";
import StylesProvider from "./providers/StylesProvider.js";
import MainLayout from "./layouts/MainLayout.jsx";
import TilesPage from "./pages/TilesPage/TilesPage.jsx";

import generateColorsArray from "./helpers/generateColorsArray.js";

const App = () => (
  <StylesProvider>
    <MainLayout>
      <TilesPage />
    </MainLayout>
  </StylesProvider>
);

export default App;

window.mocks = {
  generateColors: generateColorsArray,
};
