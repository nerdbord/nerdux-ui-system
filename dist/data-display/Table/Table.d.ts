import { PropsWithChildren } from "react";
interface TableCellProps extends PropsWithChildren<{}> {
  align: "left" | "center" | "right";
}
export declare const Table: ({
  children,
}: PropsWithChildren<{}>) => JSX.Element;
export declare const TableHead: ({
  children,
}: PropsWithChildren<{}>) => JSX.Element;
export declare const TableRow: ({
  children,
}: PropsWithChildren<{}>) => JSX.Element;
export declare const TableBody: ({
  children,
}: PropsWithChildren<{}>) => JSX.Element;
export declare const TableCell: ({
  children,
  align,
}: TableCellProps) => JSX.Element;
export {};
