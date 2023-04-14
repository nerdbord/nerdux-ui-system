import React from "react";
interface CheckboxProps {
    label: string;
    id: string;
    value: string;
    name: string;
    disabled?: boolean;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}
export declare const Checkbox: React.FC<CheckboxProps>;
export {};
