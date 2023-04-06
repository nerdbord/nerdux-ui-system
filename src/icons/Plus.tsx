import * as React from "react";

interface IconDefault {
  color?: string;
  scale?: number;
}

export const calculateDefaultDimensions = (x: number, scale = 100) => {
  return (x / 100) * scale;
};

export const Plus = ({ scale = 100, ...props }: IconDefault) => (
  <svg
    width={calculateDefaultDimensions(16, scale)}
    height={calculateDefaultDimensions(16, scale)}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>plus</title>
    <path d="M16 9H9V16H7V9H0V7H7V0H9V7H16V9Z" fill={props.color || "black"} />
  </svg>
);
