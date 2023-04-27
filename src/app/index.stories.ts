import type { Meta, StoryObj } from '@storybook/react';

import { App } from '~/app';

const meta = {
  title: 'Example',
  component: App,
  tags: ['autodocs'],
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {};
