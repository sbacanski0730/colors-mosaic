import React from "react";

import { render } from "@testing-library/react";
import App from "./App.jsx";

describe("App Component", () => {
  test("renders learn react link", () => {
    render(<App />);
    // const linkElement = screen.getByText(/Mosaic Colors/i);
    // expect(linkElement).toBeInTheDocument();
  });
});
