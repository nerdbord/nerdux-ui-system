import { useState } from "react";
import * as React from "react";
import { Error, Cancel, MagGlass } from "../../icons";
import classNames from "classnames/bind";

import * as styles from "./TextField.module.css";

const cx = classNames.bind(styles);

interface TextFieldProps {
  type?: "text" | "password";
  autoFocus?: boolean;
  disabled?: boolean;
  value: string;
  label?: string;
  name: string;
  placeholder?: string;
  error?: string;
  hint?: string;
  id: string;
  onChange(checked: boolean): void;
  withIcon?: boolean;
}

export const TextField = (props: TextFieldProps) => {
  const [focused, setFocus] = useState(false);

  const labelClassName = cx({
    baseLabel: true,
    inputLabelTop: !!props.value || props.placeholder || focused,
    inputLabelInside: !(!!props.value || props.placeholder || focused),
    focusedLabel: focused && !props.error,
    errorLabel: props.error && !props.disabled,
    labelDisabled: props.disabled,
  });

  const inputClassName = cx({
    inputWrapper: true,
    inputError: props.error,
    focusedWrapper: focused && !props.error,
    errorWrapper: props.error && !props.disabled,
    inputWrapperWitchIcon: props.withIcon,
    inputDisabled: props.disabled,
    withIcon: props.withIcon,
  });

  const iconLeftClasses = cx({
    baseIcon: true,
    leftIcon: true,
  });

  const iconRightClasses = cx({
    baseIcon: true,
    rightIcon: true,
  });

  return (
    <div className={inputClassName}>
      {props.label && (
        <label className={labelClassName} htmlFor={props.id}>
          {props.label}
        </label>
      )}
      <div>
        {props.withIcon && (
          <span className={iconLeftClasses}>{<MagGlass />}</span>
        )}
        <input
          id={props.id}
          name={props.name}
          placeholder={props.placeholder}
          disabled={props.disabled}
          value={props.value}
          type={props.type}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className={inputClassName}
          onChange={() => {
            if (props.disabled) return;
            props.onChange();
          }}
        />
        {props.error && !props.disabled && (
          <span className={iconRightClasses}>{<Error />}</span>
        )}
        {focused && !props.disabled && !props.error && (
          <span className={iconRightClasses}>{<Cancel />}</span>
        )}
      </div>
      {props.error && !props.disabled && (
        <span className={styles.error}>{props.error}</span>
      )}
      {((props.hint && !props.error) || (props.hint && props.disabled)) && (
        <span className={styles.hint}>{props.hint}</span>
      )}
    </div>
  );
};
