import { PropsWithChildren } from "react";
import * as React from "react";
import classNames from "classnames/bind";

import * as styles from "./Avatar.module.css";

const cx = classNames.bind(styles);

interface AvatarProps {
  src: string;
  alt: string;
  size?: "big" | "medium" | "small";
}

export const Avatar = ({
  size = "big",
  ...props
}: PropsWithChildren<AvatarProps>) => {
  const avatarClassName = cx({
    templateAvatar: true,
    [size]: true,
  });

  const defaultAvatarClassName = cx({
    templateDefault: true,
    [size]: true,
  });

  return (
    <div className={styles.avatarWrapper}>
      {props.src ? (
        <img src={props.src} alt={props.alt} className={avatarClassName} />
      ) : (
        <div className={defaultAvatarClassName}>
          <p>A</p>
        </div>
      )}
    </div>
  );
};
