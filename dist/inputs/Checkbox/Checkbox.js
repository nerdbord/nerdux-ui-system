import React, { useState } from "react";
import * as styles from "./Checkbox.module.css";
import classNames from "classnames/bind";
var cx = classNames.bind(styles);
export var Checkbox = function (_a) {
  var label = _a.label,
    id = _a.id,
    value = _a.value,
    name = _a.name,
    _b = _a.disabled,
    disabled = _b === void 0 ? false : _b,
    _c = _a.checked,
    checked = _c === void 0 ? false : _c,
    onChange = _a.onChange;
  var _d = useState(checked),
    isChecked = _d[0],
    setIsChecked = _d[1];
  var handleChange = function () {
    if (disabled) return;
    setIsChecked(!isChecked);
    if (onChange) onChange(!isChecked);
  };
  var labelClasses = cx({
    label: true,
    disabled: disabled,
  });
  return React.createElement(
    "div",
    { className: styles.checkbox },
    React.createElement(
      "label",
      { className: labelClasses },
      React.createElement("input", {
        type: "checkbox",
        id: id,
        value: value,
        name: name,
        checked: isChecked,
        disabled: disabled,
        onChange: handleChange,
      }),
      label
    )
  );
};
//# sourceMappingURL=Checkbox.js.map
