import * as React from "react";
import scaleCalculation from "./scaleCalculation";

interface IconProps {
  color?: string;
  scale?: number;
}

export const Arrow = ({ scale = 100, ...props }: IconProps) => {
  return (
    <svg
    width={scaleCalculation(16, scale)}
    height={scaleCalculation(16, scale)}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.41 0.295002L-2.62268e-07 1.705L6 7.705L12 1.705L10.59 0.295002L6 4.875L1.41 0.295002Z"
        fill="#1C1B1F"
      />
    </svg>
  );
};
