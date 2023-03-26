import { __rest } from "tslib";
import * as React from "react";
import * as styles from "./Button.module.css";
export var Button = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? "primary" : _c, props = __rest(_a, ["disabled", "variant"]);
    var variantClass = variant === "primary" ? styles.primary : styles.secondary;
    var getDisabledClassForSpecificVariant = function () {
        if (disabled) {
            return variant === "primary"
                ? styles.disabledPrimary
                : styles.disabledSecondary;
        }
    };
    var dynamicClasses = [
        styles.template,
        variantClass,
        getDisabledClassForSpecificVariant(),
    ].join(" ");
    return (React.createElement("button", { className: dynamicClasses, onClick: props.onClick, disabled: disabled }, props.children));
};
//# sourceMappingURL=Button.js.map