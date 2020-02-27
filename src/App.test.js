import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("'Go to game start' button exists", () => {
  const { getByText } = render(<App />);
  const button = getByText(/Go to game start/i);
  expect(button).toBeInTheDocument();
});
