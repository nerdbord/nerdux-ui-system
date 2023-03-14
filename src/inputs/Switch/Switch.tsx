import * as React from "react";
import { PropsWithChildren, useState } from "react";
import classNames from "classnames";

import * as styles from "./Switch.module.css";


interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  onChange(checked: boolean): void;
  id: string;
}

export const Switch = ({
                         disabled = false,
                         id = "id",
                         ...props
                       }: PropsWithChildren<SwitchProps>) => {
  const [checked, setChecked] = useState(false);

  const getIfDisabledLabel = (): string => {
    return disabled ? styles.switchLabelDisabled : "";
  };

  const getIfDisabledSlider = (): string => {
    return disabled ? styles.switchSliderDisabled : "";
  };

  const labelClassName = classNames(styles.switchLabel, getIfDisabledLabel())

  const sliderClassName = classNames(styles.switchSlider, getIfDisabledSlider())

  return (
    <label className={labelClassName}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={() => {
          if (disabled) return;
          setChecked(!checked);
          props.onChange();
        }}
        id={id}
      />
      <span className={sliderClassName}></span>
    </label>
  );
};