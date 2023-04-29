import * as React from "react";
import { PropsWithChildren } from "react";
interface ButtonProps {
  type?: "button" | "submit";
  disabled?: boolean;
  isLoading?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant: "primary" | "secondary";
  icon?: React.ReactNode;
  children: React.ReactNode;
}
export declare const Button: ({
  type,
  disabled,
  isLoading,
  variant,
  icon,
  children,
  onClick,
}: PropsWithChildren<ButtonProps>) => JSX.Element;
export {};
