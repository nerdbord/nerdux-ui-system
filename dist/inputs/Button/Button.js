import * as React from "react";
import styles from "./Button.module.css";
import { Spinner } from "../../icons";
import classNames from "classnames/bind";
import { Fragment, useState } from "react";
var cx = classNames.bind(styles);
export var Button = function (_a) {
  var _b;
  var _c = _a.type,
    type = _c === void 0 ? "button" : _c,
    _d = _a.disabled,
    disabled = _d === void 0 ? false : _d,
    isLoading = _a.isLoading,
    variant = _a.variant,
    icon = _a.icon,
    children = _a.children,
    onClick = _a.onClick;
  var _e = useState(false),
    isPressed = _e[0],
    setPressed = _e[1];
  var buttonClasses = cx(
    ((_b = {
      buttons: true,
    }),
    (_b[variant] = true),
    (_b.disabled = disabled),
    (_b.pressed = isPressed),
    (_b.isLoading = isLoading && !disabled),
    _b)
  );
  return React.createElement(
    "button",
    {
      onMouseDown: function () {
        return setPressed(true);
      },
      onMouseUp: function () {
        return setPressed(false);
      },
      className: buttonClasses,
      type: type,
      disabled: disabled || isLoading,
      onClick: onClick,
    },
    !disabled && isLoading
      ? React.createElement(
          Fragment,
          null,
          React.createElement(
            "span",
            { className: styles.iconSpinner },
            React.createElement(Spinner, { scale: 80 })
          ),
          children
        )
      : React.createElement(
          Fragment,
          null,
          icon && React.createElement("span", { className: styles.icon }, icon),
          children
        )
  );
};
//# sourceMappingURL=Button.js.map
