import React from "react";
import PropTypes from "prop-types";
import { ColorsProvider } from "../hooks/useColors.js";
import StylesProvider from "./StylesProvider.js";

const AppProvider = ({ children }) => (
  <ColorsProvider>
    <StylesProvider>{children}</StylesProvider>
  </ColorsProvider>
);

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
