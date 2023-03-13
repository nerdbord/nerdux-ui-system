import { PropsWithChildren } from "react";
import * as React from "react";

import * as styles from "./Button.module.css";

interface ButtonProps {
  onClick(): void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  isLoading?: boolean;
}

export const Button = ({
  disabled = false,
  variant = "primary",
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const variantClass =
    variant === "primary" ? styles.primary : styles.secondary;

  const getDisabledClassForSpecificVariant = (): string | void => {
    if (disabled) {
      return variant === "primary"
        ? styles.disabledPrimary
        : styles.disabledSecondary;
    }
  };

  const dynamicClasses = [
    styles.template,
    variantClass,
    getDisabledClassForSpecificVariant(),
  ].join(" ");

  return (
    <button
      className={dynamicClasses}
      onClick={props.onClick}
      disabled={disabled}
    >
      {props.children}
    </button>
  );
};
