import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import PrimaryNavbar from "../components/PrimaryNavbar/PrimaryNavbar.jsx";
import SecondaryNavbar from "../components/SecondaryNavbar/SecondaryNavbar.jsx";

const StyledMainLayout = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

const MainLayout = ({ children }) => (
  <StyledMainLayout>
    <PrimaryNavbar />
    <SecondaryNavbar />
    {children}
  </StyledMainLayout>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
