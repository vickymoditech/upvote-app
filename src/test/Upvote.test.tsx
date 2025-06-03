import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Upvote from "../components/Upvote";

describe("Upvote component", () => {
  test("toggles selected state on click", () => {
    let selected = {
      id: "1",
      state: false,
    };

    const handleToggle = () => {
      selected.state = !selected.state;
    };

    const { rerender } = render(
      <Upvote selected={selected} onToggle={handleToggle} />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-pressed", "false");

    // Simulate click
    fireEvent.click(button);

    // Re-render with new selected value
    rerender(<Upvote selected={selected} onToggle={handleToggle} />);
    expect(button).toHaveAttribute("aria-pressed", "true");
  });
});
