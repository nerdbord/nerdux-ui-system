import { Meta, Story } from "@storybook/react";
import { Avatar } from "./Avatar";
import * as React from "react";
import avatarIcon from "../../assets/avatar/1.jpg";

export default {
  component: Avatar,
} as Meta;

export const Default: Story = (args) => (
  <Avatar alt={""} src={""} {...args}></Avatar>
);

Default.args = {
  src: avatarIcon,
  alt: "Mexican Deathmask",
  size: "big",
};
