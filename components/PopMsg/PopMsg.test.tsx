import React from "react";
import { render, screen } from "@testing-library/react";
import { PopMsg } from "./PopMsg";

test("should show text msg", () => {
  render(<PopMsg msg="test" />);
  expect(screen.getByTestId("pop-text")).toBeInTheDocument;
});
