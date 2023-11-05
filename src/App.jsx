import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";
import PalettePage from "./pages/PalettesPage/PalettesPage.jsx";
import TilesPage from "./pages/TilesPage/TilesPage.jsx";
import MosaicPage from "./pages/MosaicPage/MosaicPage.jsx";

import AppProvider from "./providers/AppProvider.js";

const applicationRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Navigate to="/palette" replace />} />
      <Route path="/palette" element={<PalettePage />} />
      <Route path="/tiles" element={<TilesPage />} />
      <Route path="/mosaic" element={<MosaicPage />} />
    </Route>,
  ),
);

const App = () => (
  <AppProvider>
    <RouterProvider router={applicationRouter} />
  </AppProvider>
);

export default App;
