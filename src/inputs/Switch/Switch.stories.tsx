import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { Switch, SwitchProps } from "./Switch";

export default {
  component: Switch,
  argTypes: {},
} as Meta;

export const SwitchField: Story = (args) => (
  <Switch {...(args as SwitchProps)}></Switch>
);

SwitchField.args = {
  checked: false,
  disabled: false,
  id: "switch-00",
};
