import React, { PropsWithChildren } from "react";
import styles from "./Link.module.css";
import { Plus } from "../../icons";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

interface LinkProps {
  to: string;
  id?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Link = ({
  to = "www.google.pl",
  id = "google",
  target = "_blank",
  disabled = false,
  onClick,
  children,
  icon,
}: PropsWithChildren<LinkProps>) => {
  const linkClasses = cx({
    linkGlobal: true,
    linkDisabled: disabled,
  });
  return (
    <a
      className={linkClasses}
      href={to}
      id={id}
      target={target}
      onClick={onClick}
    >
      {icon && (
        <span className={styles.iconSettings}>
          <Plus />
        </span>
      )}
      {children}
    </a>
  );
};
