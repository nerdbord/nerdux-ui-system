import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

import * as styles from "./Select.module.css";
import { Button } from "../Button/Button";

interface OptionProps {
  name: string;
  value: string;
}

interface SelectContextProps {
  selectedOption: OptionProps | null;
  setOptionValue(option: OptionProps): void;
}

const SelectContext = createContext<SelectContextProps>(
  {} as SelectContextProps
);

export const Select = (props: PropsWithChildren<object>) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedOption, setOption] = useState<OptionProps | null>(null);

  const handleSetOption = (option: OptionProps) => {
    setOption(option);
  };

  return (
    <SelectContext.Provider
      value={{ selectedOption, setOptionValue: handleSetOption }}
    >
      <div className={styles.selectWrapper}>
        <Button onClick={() => setOpen(!isOpen)}>
          {selectedOption?.name ? selectedOption.name : "Nothing selected"}
        </Button>
        {isOpen && <ul>{props.children}</ul>}
      </div>
    </SelectContext.Provider>
  );
};

export const Option = (props: OptionProps) => {
  const selectContext = useContext(SelectContext);

  if (!selectContext.setOptionValue) {
    throw Error("You forgot about wrapping this into context!");
  }

  const { setOptionValue } = selectContext;

  return (
    <Button variant={"secondary"} onClick={() => setOptionValue(props)}>
      {props.name}
    </Button>
  );
};
