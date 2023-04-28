import { PropsWithChildren } from "react";
export interface ButtonProps {
  onClick(): void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  isLoading?: boolean;
}
export declare const Button: ({
  disabled,
  variant,
  ...props
}: PropsWithChildren<ButtonProps>) => JSX.Element;
