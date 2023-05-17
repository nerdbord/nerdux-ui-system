import * as React from "react";
import { PropsWithChildren, useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Switch.module.css";

const cx = classNames.bind(styles);

export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  id: string;
}

export const Switch = ({
  checked = false,
  disabled = false,
  id = "id",
  onChange,
}: PropsWithChildren<SwitchProps>) => {
  const [isChecked, setChecked] = useState(checked);

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  const labelClassName = cx({
    label: true,
    labelDisabled: disabled,
  });

  const sliderClassName = cx({
    slider: true,
    sliderDisabled: disabled,
  });

  return (
    <label className={labelClassName}>
      <input
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        onChange={(e) => {
          if (disabled) return;
          setChecked(!isChecked);
          onChange(e);
        }}
        id={id}
      />
      <span className={sliderClassName} />
    </label>
  );
};
