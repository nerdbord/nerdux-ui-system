import * as React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { TextField } from "./TextField";

const baseInputProps = {
  id: "input-1",
  value: "",
  name: "",
};
test("onChange handler should be called when typing onto it", () => {
  const handleChange = jest.fn();
  const event = { target: { value: "sometext" } };

  const { getByRole } = render(
    <TextField {...baseInputProps} onChange={handleChange} />
  );

  const textfieldElement = getByRole("textbox");

  fireEvent.change(textfieldElement, event);

  expect(handleChange).toBeCalled();
});

test("onChange handler should not be called when TextField is disabled", () => {
  const handleChange = jest.fn();
  const event = { target: { value: "sometext" } };

  const { getByRole } = render(
    <TextField {...baseInputProps} disabled onChange={handleChange} />
  );

  const textfieldElement = getByRole("textbox");

  fireEvent.change(textfieldElement, event);

  expect(handleChange).not.toBeCalled();
});

test("should have specific (depends on how you name it) className active when TextField is focused", () => {
  const handleChange = jest.fn();

  const { getByRole } = render(
    <TextField {...baseInputProps} onChange={handleChange} />
  );

  const textfieldElement = getByRole("textbox");

  act(() => {
    textfieldElement.focus();
  });

  expect(textfieldElement.classList.contains("focusedWrapper")).toBe(true);
});
