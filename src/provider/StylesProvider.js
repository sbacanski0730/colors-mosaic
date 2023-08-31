import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globalStyles.js";
import theme from "../styles/themes/theme.js";

const StylesProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

StylesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StylesProvider;
