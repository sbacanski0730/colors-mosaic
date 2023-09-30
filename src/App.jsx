import React from "react";
import StylesProvider from "./providers/StylesProvider.js";
import MainLayout from "./layouts/MainLayout.jsx";

const App = () => (
  <StylesProvider>
    <MainLayout>{/* <TilesPage /> */}</MainLayout>
  </StylesProvider>
);

export default App;
