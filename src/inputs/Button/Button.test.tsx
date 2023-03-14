import { render } from "@testing-library/react";
import * as React from "react";
import { Button } from "./Button";

test("should render Button component properly", () => {
  const handleClick = jest.fn();

  const { getByText } = render(<Button onClick={handleClick}>Click me</Button>);
  const buttonElement = getByText("Click me");
  expect(buttonElement).toBeInTheDocument();
});
