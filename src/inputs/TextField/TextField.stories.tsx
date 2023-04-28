// TextField.stories.tsx
import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { TextField, TextFieldProps } from "./TextField";

export default {
  component: TextField,
} as Meta;

export const Default: Story = (args) => (
  <TextField {...(args as TextFieldProps)}></TextField>
);

Default.args = {
  id: "id",
  name: "name",
  type: "text",
  label: "Input Label",
  placeholder: "Placeholder",
  value: "",
  hint: "",
  error: "",
  withIcon: false,
  disabled: false,
};
