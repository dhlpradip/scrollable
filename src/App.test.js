import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders correctly", () => {
    render(<App />);
    const appComponent = screen.getByTestId("app-component");
    expect(appComponent).toBeInTheDocument();
  });

  it("should scroll vertically", () => {
    render(<App />);
    const verticalScrollContainer = screen.getAllByTestId(
      "vertical-scroll-container"
    )[0];
    expect(verticalScrollContainer).toHaveStyle("overflow-y: scroll");
  });

  it("should scroll horizontally", () => {
    render(<App />);
    const horizontalScrollContainer = screen.getAllByTestId(
      "horizontal-scroll-container"
    )[0];
    expect(horizontalScrollContainer).toHaveStyle("overflow-x: scroll");
  });

  it("should display numbers in the required range", () => {
    render(<App />);
    const numbers = screen.getAllByTestId("number");
    numbers.forEach((number, index) => {
      const expectedNumber = index + 1;
      expect(parseInt(number.textContent)).toBe(expectedNumber);
    });
  });

  it("should update numbers with a timeout of 100ms", async () => {
    render(<App />);
    const firstNumber = screen.getAllByTestId("number")[0].textContent;

    console.log({ firstNumber });
    await new Promise((resolve) => setTimeout(resolve, 120)); // wait for 110ms
    const newNumber = screen.getAllByTestId("number")[0].textContent;
    console.log({ newNumber });

    expect(newNumber).not.toBe(firstNumber);
  });
});
