import { __assign } from "tslib";
import * as React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { TextField } from "./TextField";
var baseInputProps = {
    id: "input-1",
    value: "",
    name: ""
};
test("onChange handler should be called when typing onto it", function () {
    var handleChange = jest.fn();
    var event = { target: { value: "sometext" } };
    var getByRole = render(React.createElement(TextField, __assign({}, baseInputProps, { onChange: handleChange }))).getByRole;
    var textfieldElement = getByRole("textbox");
    fireEvent.change(textfieldElement, event);
    expect(handleChange).toBeCalled();
});
test("onChange handler should not be called when TextField is disabled", function () {
    var handleChange = jest.fn();
    var event = { target: { value: "sometext" } };
    var getByRole = render(React.createElement(TextField, __assign({}, baseInputProps, { disabled: true, onChange: handleChange }))).getByRole;
    var textfieldElement = getByRole("textbox");
    fireEvent.change(textfieldElement, event);
    expect(handleChange).not.toBeCalled();
});
test("should have specific (depends on how you name it) className active when TextField is focused", function () {
    var handleChange = jest.fn();
    var getByRole = render(React.createElement(TextField, __assign({}, baseInputProps, { onChange: handleChange }))).getByRole;
    var textfieldElement = getByRole("textbox");
    act(function () {
        textfieldElement.focus();
        expect(textfieldElement).toHaveFocus();
    });
});
//# sourceMappingURL=TextField.test.js.map