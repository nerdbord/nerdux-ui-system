import { Meta, Story } from "@storybook/react";
import { Button, ButtonVariant } from "./Button";
import React from "react";
import { Plus } from "../../icons";

export default {
  component: Button,
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
  <Button
    icon={<Plus />}
    isLoading={false}
    variant={ButtonVariant.primary}
    {...args}
    onClick={() => console.log("clicked")}
  >
    Button
  </Button>
);
Default.args = {
  variant: ButtonVariant.primary,
  disabled: false,
  isLoading: false,
};
