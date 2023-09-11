import React from "react";
import { screen, render } from "@testing-library/react";
import Button from "./Button.jsx";
import StyledProvider from "../../providers/StylesProvider.js";
import theme from "../../styles/themes/theme.js";

describe("Button Component", () => {
  it("Checks component render", () => {
    render(
      <StyledProvider>
        <Button text="Button Content" $contained={false} />
      </StyledProvider>,
    );
    expect(screen.getByText("Button Content")).toBeVisible();
  });

  it("Checks component render with contained default", () => {
    render(
      <StyledProvider>
        <Button text="Button Content" />
      </StyledProvider>,
    );
    // const button = screen.getByText("Button Content");
    expect(screen.getByText("Button Content")).toHaveStyleRule(
      "background-color",
      "transparent",
    );
  });

  it("Checks component render with contained = true", () => {
    render(
      <StyledProvider>
        <Button text="Button Content" contained />
      </StyledProvider>,
    );
    expect(screen.getByText("Button Content")).toHaveStyleRule(
      "background-color",
      theme.colors.button.background,
    );
  });
});
