import { __assign } from "tslib";
import * as React from "react";
import { TextField } from "./TextField";
export default {
    component: TextField,
    argTypes: {
        type: {
            options: ["text", "password"],
            control: { type: "select" }
        }
    }
};
export var MultiTextField = function (args) { return (React.createElement(TextField, __assign({}, args))); };
MultiTextField.args = {
    id: "id",
    name: "name",
    type: "text",
    label: "Input Label",
    placeholder: "Placeholder",
    value: "",
    hint: "",
    error: "",
    withIcon: false,
    disabled: false
};
//# sourceMappingURL=TextField.stories.js.map