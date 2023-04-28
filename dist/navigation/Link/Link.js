import React from "react";
import * as styles from "./Link.module.css";
import { Plus } from "../../icons";
import classNames from "classnames/bind";
var cx = classNames.bind(styles);
export var Link = function (_a) {
  var _b = _a.to,
    to = _b === void 0 ? "www.google.pl" : _b,
    _c = _a.id,
    id = _c === void 0 ? "google" : _c,
    _d = _a.target,
    target = _d === void 0 ? "_blank" : _d,
    _e = _a.disabled,
    disabled = _e === void 0 ? false : _e,
    children = _a.children,
    icon = _a.icon;
  var handleClick = function (event) {
    {
      disabled && event.preventDefault();
    }
  };
  var linkClasses = cx({
    linkGlobal: true,
    linkDisabled: disabled,
  });
  return React.createElement(
    "a",
    {
      className: linkClasses,
      href: to,
      id: id,
      target: target,
      onClick: handleClick,
    },
    icon &&
      React.createElement(
        "span",
        { className: styles.iconSettings },
        React.createElement(Plus, null)
      ),
    children
  );
};
//# sourceMappingURL=Link.js.map
