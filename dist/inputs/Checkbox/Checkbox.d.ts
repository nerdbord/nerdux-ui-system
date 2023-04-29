import React from "react";
interface CheckboxProps {
  id: string;
  name: string;
  value?: string;
  label?: string;
  error?: string;
  checked: boolean;
  disabled?: boolean;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}
export declare const Checkbox: React.FC<CheckboxProps>;
export {};
