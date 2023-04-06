import React from "react";
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
}

const Link: React.FC<LinkProps> = ({
  to = "www.google.pl",
  id = "google",
  target = "_blank",
  disabled = false,
  onClick,
  children,
}) => {
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
      <span className={styles.iconSettings}>
        <Plus />
      </span>
      {children}
    </a>
  );
};

export default Link;
