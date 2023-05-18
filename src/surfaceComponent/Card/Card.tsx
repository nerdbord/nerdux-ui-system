import { PropsWithChildren } from "react";
import * as React from "react";
import * as styles from "./Card.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface CardProps {
  fullWidth?: boolean;
}

interface CardImageProps {
  url: string;
  alt?: string;
}

export const CardImage = ({
  url,
  alt,
}: CardImageProps & PropsWithChildren<object>) => {
  return (
    <div className={styles.imageWrapper}>
      <img src={url} alt={alt} />
    </div>
  );
};

export const CardContent = (props: PropsWithChildren<object>) => {
  return <div className={styles.cardContent}>{props.children}</div>;
};

export const Card = ({ fullWidth, ...props }: PropsWithChildren<CardProps>) => {
  const cardDynamicClasses = cx({
    cardWrapper: true,
    fullWidth: fullWidth,
  });

  return <div className={cardDynamicClasses}>{props.children}</div>;
};
