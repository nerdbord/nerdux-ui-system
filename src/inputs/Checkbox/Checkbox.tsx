import React, { useEffect, useState } from "react";
import styles from "./Checkbox.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

interface CheckboxProps {
  id: string;
  name: string;
  value?: string;
  label?: string;
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
  onChange,
}) => {
  const [isChecked, setChecked] = useState(checked);

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  const labelClasses = cx({
    label: true,
    disabled: disabled,
  });

  return (
    <div className={styles.checkbox}>
      <label className={labelClasses}>
        <input
          type="checkbox"
          id={id}
          value={value}
          name={name}
          checked={isChecked}
          disabled={disabled}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  );
};
