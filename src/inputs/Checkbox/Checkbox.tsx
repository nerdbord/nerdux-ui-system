import React, { useEffect, useState } from "react";
import styles from "./Checkbox.module.css";
import classNames from "classnames/bind";
import { Checked } from "../../icons/Checked";
const cx = classNames.bind(styles);

interface CheckboxProps {
  label?: string | React.ReactNode;
  id: string;
  name: string;
  value?: string;
  error?: string;
  checked: boolean;
  disabled?: boolean;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  id,
  value,
  name,
  disabled = false,
  checked = false,
  error,
  onChange,
}) => {
  const [isChecked, setChecked] = useState(checked);

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  const dynamicClasses = cx({
    baseCheckbox: true,
    disabled: disabled,
    checked: isChecked,
    errorCheckbox: !!error,
  });

  const wrapperDynamicClass = cx({
    checkboxWrapper: true,
    disabled: disabled,
  });

  return (
    <div>
      <label className={wrapperDynamicClass} htmlFor={id}>
        <div className={dynamicClasses}>{isChecked && <Checked />}</div>
        <input
          type="checkbox"
          value={value}
          hidden
          name={name}
          disabled={disabled}
          checked={isChecked}
          id={id}
          onChange={(e) => {
            setChecked(!isChecked);
            onChange(e);
          }}
        />
        {label && label}
      </label>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
