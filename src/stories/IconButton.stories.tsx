import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconButton from "../components/library/buttons/IconButton";

export default {
  title: "Example/IconButton",
  component: IconButton,
  argTypes: {
    icon: { control: "radio" },
    enabled: { control: "boolean" },
    fill: { control: "color" },
    color: { control: "color" },
    size: { control: "radio" },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const BookmarkEnabled = Template.bind({});
BookmarkEnabled.args = {
  icon: "bookmark",
  enabled: true,
  fill: "#00B0C8",
  color: "#00B0C8",
  size: "medium",
};

export const BookmarkDisabled = Template.bind({});
BookmarkDisabled.args = {
  icon: "bookmark",
  enabled: false,
  fill: "#fff",
  color: "#00B0C8",
  size: "medium",
};

export const HeartEnabled = Template.bind({});
HeartEnabled.args = {
  icon: "heart",
  enabled: true,
  fill: "#00B0C8",
  color: "#00B0C8",
  size: "medium",
};

export const HeartDisbled = Template.bind({});
HeartDisbled.args = {
  icon: "heart",
  enabled: false,
  fill: "#fff",
  color: "#00B0C8",
  size: "medium",
};

export const ThumbsUpEnabled = Template.bind({});
ThumbsUpEnabled.args = {
  icon: "thumbsup",
  enabled: true,
  fill: "#00B0C8",
  color: "#00B0C8",
  size: "medium",
};

export const ThumbsUpDisabled = Template.bind({});
ThumbsUpDisabled.args = {
  icon: "thumbsup",
  enabled: false,
  fill: "#fff",
  color: "#00B0C8",
  size: "medium",
};
