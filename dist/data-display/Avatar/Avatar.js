import { __rest } from "tslib";
import * as React from "react";
import classNames from "classnames/bind";
import styles from "./Avatar.module.css";
var cx = classNames.bind(styles);
export var Avatar = function (_a) {
    var _b, _c;
    var _d = _a.size, size = _d === void 0 ? "big" : _d, props = __rest(_a, ["size"]);
    var avatarClassName = cx((_b = {
            templateAvatar: true
        },
        _b[size] = true,
        _b));
    var defaultAvatarClassName = cx((_c = {
            templateDefault: true
        },
        _c[size] = true,
        _c));
    return (React.createElement("div", { className: styles.avatarWrapper }, props.src ? (React.createElement("img", { src: props.src, alt: props.alt, className: avatarClassName })) : (React.createElement("div", { className: defaultAvatarClassName },
        React.createElement("p", null, "A")))));
};
//# sourceMappingURL=Avatar.js.map