import React, { PropsWithChildren, useState } from "react";
import styles from "./Accordion.module.css";
import { Arrow } from "../../icons/Arrow";


interface AccordionProps {
  header: string;
  defaultOpen: boolean;
  children: React.ReactNode
}

export const Accordion = ({
  header,
  defaultOpen = false,
  children,
}: PropsWithChildren<AccordionProps>) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleSwitch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionDefault}>
      <div className={styles.accordionHeader}>
        <span>{header}</span>
        <span
          onClick={handleSwitch}
          className={isOpen ? styles.arrowRotate : ""}
        >
          <Arrow />
        </span>
      </div>
      {isOpen && <div className={styles.accordionContent}>{children}</div>}
    </div>
  );
};
