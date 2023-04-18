import { PropsWithChildren } from "react";
import * as React from "react";
import imageUrl from "../../assets/card/card.png";
import * as styles from "./Card.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);


interface CardProps {
  fullWidth?: boolean;
}

export const CardImage = () => {
  return (
    <div className={styles.imageWrapper}>
      <img src={imageUrl} alt="placeholder" />
    </div>
  );
};

export const CardContent = (props: PropsWithChildren<object>) => {
  return <div className={styles.cardContent}>{props.children}</div>;
};

export const Card = ({
  fullWidth = false,
  ...props
}: PropsWithChildren<CardProps>) => {
  
  const cardDynamicClasses = cx({
    cardWrapper: true,
    fullWidth: fullWidth,
  })

  return <div className={cardDynamicClasses}>{props.children}</div>;
};
