import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Link } from "./Link";
import { Plus } from "../../icons";
import styles from "./Link.module.css";

export default {
  component: Link,
} as Meta;

export const Default: StoryFn = (args) => (
  <Link to={""} {...args} onClick={() => console.log("clicked")}>
    <span className={styles.iconSettings}>
      <Plus />
    </span>{" "}
    Click Me!
  </Link>
);
Default.args = {
  disabled: false,
};
