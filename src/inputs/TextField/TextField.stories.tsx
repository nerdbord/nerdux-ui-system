// TextField.stories.tsx
import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { TextField, TextFieldProps } from "./TextField";

export default {
  component: TextField,
  argTypes: {
    type: {
      options: ["text", "password"],
      control: { type: "select" },
    },
  },
} as Meta;

export const MultiTextField: StoryFn<TextFieldProps> = (args) => (
  <TextField {...args} />
);

MultiTextField.args = {
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
