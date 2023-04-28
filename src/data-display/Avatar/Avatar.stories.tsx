import { Meta, StoryFn } from "@storybook/react";
import { Avatar } from "./Avatar";
import * as React from "react";
import avatarIcon from "../../assets/avatar/1.jpg";

export default {
  component: Avatar,
  argTypes: {
    size: {
      options: ["big", "medium", "small"],
      control: { type: "select" },
    },
  },
} as Meta;

export const MultiAvatar: StoryFn = (args) => (
  <Avatar alt={""} src={""} {...args} />
);

MultiAvatar.args = {
  src: avatarIcon,
  alt: "Mexican Deathmask",
  size: "big",
};
