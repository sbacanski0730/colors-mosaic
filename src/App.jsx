import React from "react";
import StylesProvider from "./providers/StylesProvider.js";
import MainLayout from "./layouts/MainLayout.jsx";

// eslint-disable-next-line no-unused-vars
import TilesPage from "./pages/TilesPage/TilesPage.jsx";
// eslint-disable-next-line no-unused-vars
import MosaicPage from "./pages/MosaicPage/MosaicPage.jsx";

const App = () => (
  <StylesProvider>
    <MainLayout>
      <MosaicPage />
      {/* <TilesPage /> */}
    </MainLayout>
  </StylesProvider>
);

export default App;
