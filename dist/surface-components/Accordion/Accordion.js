import React, { useState } from "react";
import styles from "./Accordion.module.css";
import { Arrow } from "../../icons/Arrow";
export var Accordion = function (_a) {
  var header = _a.header,
    _b = _a.defaultOpen,
    defaultOpen = _b === void 0 ? false : _b,
    children = _a.children;
  var _c = useState(defaultOpen),
    isOpen = _c[0],
    setIsOpen = _c[1];
  var handleSwitch = function () {
    setIsOpen(!isOpen);
  };
  return React.createElement(
    "div",
    { className: styles.accordionDefault },
    React.createElement(
      "div",
      { className: styles.accordionHeader, onClick: handleSwitch },
      React.createElement("span", null, header),
      React.createElement(
        "span",
        {
          className: !isOpen
            ? styles.accordionArrow
            : styles.accordionArrowRotate,
        },
        React.createElement(Arrow, null)
      )
    ),
    isOpen &&
      React.createElement(
        "div",
        { className: styles.accordionContent },
        children
      )
  );
};
//# sourceMappingURL=Accordion.js.map
