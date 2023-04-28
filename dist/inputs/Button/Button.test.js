import { render } from "@testing-library/react";
import * as React from "react";
import { Button } from "./Button";
test("should render Button component properly", function () {
  var handleClick = jest.fn();
  var getByText = render(
    React.createElement(Button, { onClick: handleClick }, "Click me")
  ).getByText;
  var buttonElement = getByText("Click me");
  expect(buttonElement).toBeInTheDocument();
});
//# sourceMappingURL=Button.test.js.map
