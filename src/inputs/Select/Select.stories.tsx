// Button.stories.tsx
import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { Option, Select as MySelect } from "./Select";

export default {
  component: MySelect,
} as Meta;

const options = [
  { name: "Option 1", value: "1" },
  { name: "Option 2", value: "2" },
  { name: "Option 3", value: "3" },
];

export const Select: Story = (args) => (
  <MySelect {...args}>
    {options.map((option) => (
      <Option {...option} key={option.value} />
    ))}
  </MySelect>
);

Select.args = {};
