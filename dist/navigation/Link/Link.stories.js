import { __assign } from "tslib";
import React from "react";
import { Link } from "./Link";
import { Plus } from "../../icons";
export default {
  component: Link,
  argTypes: {
    icon: {
      options: {
        none: null,
        Settings: React.createElement(Plus, null),
      },
    },
  },
};
export var Default = function (args) {
  return React.createElement(
    Link,
    __assign({ to: "" }, args, {
      onClick: function () {
        return console.log("clicked");
      },
    }),
    "Click Me!"
  );
};
Default.args = {
  disabled: false,
};
//# sourceMappingURL=Link.stories.js.map
