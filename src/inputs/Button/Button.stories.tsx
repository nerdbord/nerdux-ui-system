import { Meta, StoryFn } from "@storybook/react";
import { Button } from "./Button";
import React from "react";
import { Plus } from "../../icons";

export default {
  component: Button,
  argTypes: {
    icon: {
      options: {
        none: null,
        Settings: <Plus scale={80} />,
      },
    },
  },
} as Meta;

export const Default: StoryFn = (args) => (
  <Button
    icon={<Plus scale={80} />}
    isLoading={false}
    variant={"primary"}
    {...args}
    onClick={() => console.log("clicked")}
  >
    Button
  </Button>
);
Default.args = {
  variant: "primary",
  disabled: false,
  isLoading: false,
};
