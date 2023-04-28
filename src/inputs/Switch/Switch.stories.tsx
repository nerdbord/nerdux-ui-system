import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { Switch, SwitchProps } from "./Switch";

export default {
  component: Switch,
} as Meta;

export const SwitchField: StoryFn<SwitchProps> = (args) => <Switch {...args} />;

SwitchField.args = {
  checked: false,
  disabled: false,
  id: "switch-00",
};
