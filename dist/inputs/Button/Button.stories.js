import { __assign } from "tslib";
import { Button } from "./Button";
import React from "react";
import { Plus } from "../../icons";
export default {
  component: Button,
  argTypes: {
    icon: {
      options: {
        none: null,
        Settings: React.createElement(Plus, { scale: 80 }),
      },
    },
  },
};
export var Default = function (args) {
  return React.createElement(
    Button,
    __assign(
      {
        icon: React.createElement(Plus, { scale: 80 }),
        isLoading: false,
        variant: "primary",
      },
      args,
      {
        onClick: function () {
          return console.log("clicked");
        },
      }
    ),
    "Button"
  );
};
Default.args = {
  variant: "primary",
  disabled: false,
  isLoading: false,
};
//# sourceMappingURL=Button.stories.js.map
