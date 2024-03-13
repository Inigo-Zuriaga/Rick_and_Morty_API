import TimePicker from "../../components/library/input/TimePicker";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
//import { TimePicker } from 'fundamental-react/lib/TimePicker';

//1.Default export

export default {
    title: 'TimePicker',
    component: TimePicker,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof TimePicker>;
  
  const Template: ComponentStory<typeof TimePicker> = (args) => <TimePicker {...args} />;

  export const Primary = Template.bind({});
Primary.args = {
  hours: true,
  setHours: 'Hours',
  minutes: true,
  setMinutes: 'Minutes',
};