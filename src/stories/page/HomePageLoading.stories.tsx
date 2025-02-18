import type { Meta, StoryObj } from '@storybook/react';

import HomeLoading from '@/app/(home)/loading';

const meta = {
  title: 'Page/Home',
  component: HomeLoading,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'White',
    },
  },
} satisfies Meta<typeof HomeLoading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Loading: Story = {};
