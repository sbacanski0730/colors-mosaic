import React from "react";
import StylesProvider from "./providers/StylesProvider.js";
import MainLayout from "./layouts/MainLayout.jsx";
import MosaicPage from "./pages/MosaicPage/MosaicPage.jsx";

const App = () => (
  <StylesProvider>
    <MainLayout>
      <MosaicPage />
    </MainLayout>
  </StylesProvider>
);

export default App;
