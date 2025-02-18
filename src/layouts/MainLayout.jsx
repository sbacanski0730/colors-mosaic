import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import PrimaryNavbar from "../components/PrimaryNavbar/PrimaryNavbar.jsx";
import SecondaryNavbar from "../components/SecondaryNavbar/SecondaryNavbar.jsx";

const StyledMainLayout = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

const MainLayout = () => (
  <StyledMainLayout>
    <PrimaryNavbar />
    <SecondaryNavbar />
    <Outlet />
  </StyledMainLayout>
);

export default MainLayout;
