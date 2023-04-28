import { __assign } from "tslib";
import * as React from "react";
import { Button as MyButton } from "./Button";
export default {
  component: MyButton,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
};
export var Button = function (args) {
  return React.createElement(MyButton, __assign({}, args), "Click me!");
};
Button.args = {
  disabled: false,
  variant: "primary",
};
//# sourceMappingURL=Button.stories.js.map
