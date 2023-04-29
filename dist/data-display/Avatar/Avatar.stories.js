import { __assign } from "tslib";
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
};
export var MultiAvatar = function (args) {
  return React.createElement(Avatar, __assign({ alt: "", src: "" }, args));
};
MultiAvatar.args = {
  src: avatarIcon,
  alt: "Mexican Deathmask",
  size: "big",
};
//# sourceMappingURL=Avatar.stories.js.map
