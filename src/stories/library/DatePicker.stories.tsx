import { ComponentStory, ComponentMeta } from "@storybook/react";

import DatePicker from "./../../components/library/input/DatePicker";
import "./../../components/library/input/DatePicker.module.css";

export default {
  title: "Example/DatePicker",
  component: DatePicker,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => (
  <DatePicker {...args} />
);

export const Default = Template.bind({});
Default.args = {};
