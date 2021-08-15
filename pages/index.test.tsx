import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Index from "./index";

describe("Index testing", () => {
  test("Should render header title", () => {
    render(<Index />);
    const text = screen.getByText("Welcome");
    expect(text).toBeInTheDocument();
  });
});
