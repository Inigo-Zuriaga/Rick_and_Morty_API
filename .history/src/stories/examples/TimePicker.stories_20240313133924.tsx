// Importar TimePicker
import TimePicker from "../../components/library/input/TimePicker";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

// Exportar el componente Storybook
export default {
    title: 'TimePicker',
    component: TimePicker,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TimePicker>;

// Definir el Template
const Template: ComponentStory<typeof TimePicker> = (args) => <TimePicker {...args} />;

// Exportar la variante "Primary" del componente
export const Primary = Template.bind({});
Primary.args = {
  hours: 12, // Establecer un valor numérico para las horas
  setHours: (hours: number) => console.log('Hours:', hours), // Pasar una función que acepte un número como argumento
  minutes: 30, // Establecer un valor numérico para los minutos
  setMinutes: (minutes: number) => console.log('Minutes:', minutes), // Pasar una función que acepte un número como argumento
};
