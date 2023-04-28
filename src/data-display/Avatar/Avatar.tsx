import React, { PropsWithChildren } from "react";
import classNames from "classnames/bind";
import styles from "./Avatar.module.css";

const cx = classNames.bind(styles);

interface AvatarProps {
  src: string;
  alt: string;
  size?: "big" | "medium" | "small";
}

export const Avatar = ({
  size = "big",
  src, alt
}: PropsWithChildren<AvatarProps>) => {
  const imgAvatarClasses = cx({
    templateAvatar: true,
    [size]: true,
  });

  const defaultAvatarClasses = cx({
    templateDefault: true,
    [size]: true,
  });

  return (
    <div className={styles.wrapper}>
      {src ? (
        <img src={src} alt={alt} className={imgAvatarClasses} />
      ) : (
        <div className={defaultAvatarClasses}>
          <p>A</p>
        </div>
      )}
    </div>
  );
};
