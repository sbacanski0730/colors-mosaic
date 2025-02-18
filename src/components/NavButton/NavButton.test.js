import React from "react";
import { render, screen } from "@testing-library/react";
import StylesProvider from "../../providers/StylesProvider.js";
import NavButton from "./NavButton.jsx";

describe("NavButton Component", () => {
  it("Checks proper render", () => {
    render(
      <StylesProvider>
        <NavButton location="/" label="Tiles" />
      </StylesProvider>,
    );
    expect(screen.getByText("Tiles")).toBeInTheDocument();
  });
});
