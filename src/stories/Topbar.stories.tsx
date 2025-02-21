import type { Meta, StoryObj } from '@storybook/react';

import Topbar from '@/components/Topbar';

const meta: Meta<typeof Topbar> = {
  component: Topbar,
  title: 'components/Topbar',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Topbar>;

export const Default: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
  },
};

export const TopbarAfterSearch: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/search',
        query: {
          category: 'author',
          keyword: 'badhertz52',
        },
      },
    },
  },
};
