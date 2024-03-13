import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from '../components/library/visual/Card';

export default {
    title: 'Card',
    component: Card,
    parameters: {
      layout: 'centered',
    }
  } as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const withTitleAndSubtitle = Template.bind({});
withTitleAndSubtitle.args = {
    title:"Rick and Morty",
    subtitle:"An animated show",
};



  