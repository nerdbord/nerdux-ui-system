import * as React from "react";
import styles from "./Button.module.css";
import { Spinner } from "../../icons";
import classNames from "classnames/bind";
import { PropsWithChildren, Fragment, useState } from "react";
const cx = classNames.bind(styles);

interface ButtonProps {
  type?: "button" | "submit";
  disabled?: boolean;
  isLoading?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;

  variant: "primary" | "secondary";
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button = ({
  type = "button",
  disabled = false,
  isLoading,
  variant,
  icon,
  children,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  const [isPressed, setPressed] = useState(false);

  const buttonClasses = cx({
    buttons: true,
    [variant]: true,
    disabled,
    pressed: isPressed,
    isLoading: isLoading && !disabled,
  });

  return (
    <button
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      className={buttonClasses}
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {!disabled && isLoading ? (
        <>
          <span className={styles.iconSpinner}>
            <Spinner scale={80} />
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
