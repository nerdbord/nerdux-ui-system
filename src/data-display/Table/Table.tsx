/* eslint-disable @typescript-eslint/ban-types */
import { PropsWithChildren } from "react";
import styles from "./Table.module.css";
import React from "react";

interface TableCellProps extends PropsWithChildren<{}> {
  align: "left" | "center" | "right";
}

export const Table = ({ children }: PropsWithChildren<{}>) => (
  <table className={styles.wrapper}>{children}</table>
);

export const TableHead = ({ children }: PropsWithChildren<{}>) => (
  <thead className={styles.head}>{children}</thead>
);

export const TableRow = ({ children }: PropsWithChildren<{}>) => (
  <tr className={styles.row}>{children}</tr>
);

export const TableBody = ({ children }: PropsWithChildren<{}>) => (
  <tbody>{children}</tbody>
);

export const TableCell = ({ children, align }: TableCellProps) => (
  <td className={styles.cell} style={{ textAlign: align }}>
    {children}
  </td>
);
