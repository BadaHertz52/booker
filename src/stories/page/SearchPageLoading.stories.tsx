import type { Meta, StoryObj } from '@storybook/react';

import SearchPageLoading from '@/app/search/loading';

const meta = {
  title: 'Page/Search',
  component: SearchPageLoading,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'White',
    },
  },
} satisfies Meta<typeof SearchPageLoading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Loading: Story = {};
