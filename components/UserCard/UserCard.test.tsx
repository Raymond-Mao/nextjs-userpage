import React from "react";
import { render, screen } from "@testing-library/react";
import { UserCard } from "./UserCard";
import { mockUser } from "../../utils/consts";
test("should show userinfo", () => {
  render(<UserCard data={mockUser} />);
  expect(screen.getByTestId("card-text")).toBeInTheDocument;
});
