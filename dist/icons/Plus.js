import { __rest } from "tslib";
import * as React from "react";
import scaleCalculation from "./scaleCalculation";
export var Plus = function (_a) {
  var _b = _a.scale,
    scale = _b === void 0 ? 100 : _b,
    props = __rest(_a, ["scale"]);
  return React.createElement(
    "svg",
    {
      width: scaleCalculation(16, scale),
      height: scaleCalculation(16, scale),
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    React.createElement("title", null, "plus"),
    React.createElement("path", {
      d: "M16 9H9V16H7V9H0V7H7V0H9V7H16V9Z",
      fill: props.color || "black",
    })
  );
};
//# sourceMappingURL=Plus.js.map
