import React from "react";
import { Meta, Story } from "@storybook/react";
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

export const Default: Story = (args) => (
  <Link to={""} {...args} onClick={() => console.log("clicked")}>
    Click Me!
  </Link>
);
Default.args = {
  disabled: false,
};
