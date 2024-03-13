import { ComponentStory, ComponentMeta } from "@storybook/react";

import Chip from "../components/library/visual/Chip";

export default {
  title: "Component-Library/Chip",
  component: Chip,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: ["outlined", "filled"],
      control: "select",
    },
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Human",
  variant: "filled",
};
