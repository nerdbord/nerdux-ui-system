import * as React from "react";
import scaleCalculation from "./scaleCalculation";

interface IconProps {
  color?: string;
  scale?: number;
}

export const Plus = ({ scale = 100, ...props }: IconProps) => (
  <svg
    width={scaleCalculation(16, scale)}
    height={scaleCalculation(16, scale)}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>plus</title>
    <path d="M16 9H9V16H7V9H0V7H7V0H9V7H16V9Z" fill={props.color || "black"} />
  </svg>
);
