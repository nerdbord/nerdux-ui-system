import React, { PropsWithChildren } from "react";
import styles from "./Button.module.css";
import { Spinner } from "../../icons";
import { Fragment } from "react";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

interface ButtonProps {
  type?: "button" | "submit";
  disabled?: boolean;
  isLoading: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant: "primary" | "secondary";
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const Button = ({
  type = "button",
  disabled = false,
  isLoading,
  variant,
  icon,
  children,
}: PropsWithChildren<ButtonProps>) => {
  const buttonClasses = cx({
    buttons: true,
    primary: variant === "primary",
    secondary: variant === "secondary",
    disabled: disabled,
    isLoadingPrimary: variant === "primary" && isLoading && !disabled,
    isLoadingSecondary: variant === "secondary" && isLoading,
  });

  return (
    <button className={buttonClasses} type={type} disabled={disabled}>
      {!disabled && isLoading ? (
        <>
          <span className={styles.iconSpinner}>
            <Spinner />
          </span>
          {children}
        </>
      ) : (
        <>
          {icon && <span className={styles.icon}>{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};
