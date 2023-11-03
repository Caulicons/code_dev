import type {Meta , StoryObj} from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'Actions/Button',
  component: Button,
  parameters: {
    layout: 'centered',

  }, 

} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    children: 'Filled Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};
