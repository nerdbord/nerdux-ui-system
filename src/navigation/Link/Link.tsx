import React, { PropsWithChildren } from "react";
import styles from "./Link.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

interface LinkProps {
  to: string;
  id?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const Link = ({
  to = "www.google.pl",
  id = "google",
  target = "_blank",
  disabled = false,
  children,
}: PropsWithChildren<LinkProps>) => {
	const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		{
			disabled && event.preventDefault()
		}
	}

  const linkClasses = cx({
    default: true,
    disabled: disabled,
  });
  return (
    <a
      className={linkClasses}
      href={to}
      id={id}
      target={target}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};
