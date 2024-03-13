import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextField from '../components/library/input/TextField';

export default {
    title: 'Textfield',
    component: TextField,
    argTypes: {
        id: { control: "-" },
        inputFunction: { control: "-" },
    },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Outlined = Template.bind({});

Outlined.args = {
    variant: 'outlined',
    labelText: 'Label',
    inputPlaceholder: 'Placeholder',
    inputText: '',
    supportingText: 'Supporting text',
}

export const Filled = Template.bind({});

Filled.args = {
    variant: 'filled',
    labelText: 'Label',
    inputPlaceholder: 'Placeholder',
    inputText: '',
    supportingText: 'Supporting text',
}