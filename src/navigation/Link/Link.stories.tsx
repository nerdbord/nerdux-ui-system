import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Link } from "./Link";
import { Plus } from "../../icons";

export default {
  component: Link,
  argTypes: {
    icon: {
      options: {
        none: null,
        Settings: <Plus />,
      },
    },
  },
} as Meta;

export const Default: StoryFn = (args) => (
  <Link to={""} {...args} onClick={() => console.log("clicked")}>
    Click Me!
  </Link>
);
Default.args = {
  disabled: false,
};
