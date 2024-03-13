import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Badge from "../components/library/visual/Badge";

export default {
  title: "Example/Badge",
  component: Badge,
  argTypes: {
    type: {
      control: "select",
      options: ["primary", "secondary"],
    },
    show: {
      control: "boolean",
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  children: "Badge text",
  show: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  children: "Badge text",
  show: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  type: "primary",
  children: "Badge text",
  show: false,
};
