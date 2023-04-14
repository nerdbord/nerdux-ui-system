import { __rest } from "tslib";
import * as React from "react";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Switch.module.css";
var cx = classNames.bind(styles);
export var Switch = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.id, id = _c === void 0 ? "id" : _c, props = __rest(_a, ["disabled", "id"]);
    var _d = useState(false), checked = _d[0], setChecked = _d[1];
    var labelClassName = cx({
        switchLabel: true,
        switchLabelDisabled: disabled
    });
    var sliderClassName = cx({
        switchSlider: true,
        switchSliderDisabled: disabled
    });
    return (React.createElement("label", { className: labelClassName },
        React.createElement("input", { type: "checkbox", checked: checked, disabled: disabled, onChange: function () {
                if (disabled)
                    return;
                setChecked(!checked);
                props.onChange(!checked);
            }, id: id }),
        React.createElement("span", { className: sliderClassName })));
};
//# sourceMappingURL=Switch.js.map