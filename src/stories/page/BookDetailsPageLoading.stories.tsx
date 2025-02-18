import type { Meta, StoryObj } from '@storybook/react';

import BookDetailsLoading from '@/app/book/[isbn]/loading';

const meta = {
  title: 'Page/BookDetails',
  component: BookDetailsLoading,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'White',
    },
  },
} satisfies Meta<typeof BookDetailsLoading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalLoading: Story = {};
