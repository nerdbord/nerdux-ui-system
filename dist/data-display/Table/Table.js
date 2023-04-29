import styles from "./Table.module.css";
import React from "react";
export var Table = function (_a) {
  var children = _a.children;
  return React.createElement(
    "table",
    { className: "".concat(styles.table) },
    children
  );
};
export var TableHead = function (_a) {
  var children = _a.children;
  return React.createElement(
    "thead",
    { className: "".concat(styles.tableHead) },
    children
  );
};
export var TableRow = function (_a) {
  var children = _a.children;
  return React.createElement(
    "tr",
    { className: "".concat(styles.tableRow) },
    children
  );
};
export var TableBody = function (_a) {
  var children = _a.children;
  return React.createElement("tbody", null, children);
};
export var TableCell = function (_a) {
  var children = _a.children,
    align = _a.align;
  return React.createElement(
    "td",
    { className: "".concat(styles.tableCell), style: { textAlign: align } },
    children
  );
};
//# sourceMappingURL=Table.js.map
