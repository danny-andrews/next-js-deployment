import React from "react";
import { it, expect } from "vitest";
import Counter from "./Counter.jsx";
import { render, fireEvent } from "@testing-library/react";

it("updates display count when increment button is clicked", () => {
  const { getByText, getByTestId } = render(<Counter />);
  const incrementButton = getByText("+");
  const countDisplay = getByTestId("count-display");
  fireEvent.click(incrementButton);
  expect(countDisplay.innerText).toBe("1");
});
