import { __assign } from "tslib";
import React from "react";
import { Checkbox } from "./Checkbox";
export default {
  component: Checkbox,
};
export var Default = function (args) {
  return React.createElement(
    Checkbox,
    __assign({ value: "", name: "", id: "", label: "" }, args)
  );
};
Default.args = {
  checked: true,
  disabled: false,
  label: "Checkbox label",
};
//# sourceMappingURL=Checkbox.stories.js.map
