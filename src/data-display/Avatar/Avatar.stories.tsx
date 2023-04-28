import { Meta, StoryFn } from "@storybook/react";
import { Avatar } from "./Avatar";
import * as React from "react";
import avatarIcon from "../../assets/avatar/1.jpg";

export default {
  component: Avatar,
} as Meta;

export const Default: StoryFn = (args) => (
  <Avatar alt={""} src={""} {...args} />
);

Default.args = {
  src: avatarIcon,
  alt: "Mexican Deathmask",
  size: "big",
};
