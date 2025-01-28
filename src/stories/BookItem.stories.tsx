import type { Meta, StoryObj } from '@storybook/react';

import { BookItem } from '@/components';
import BookItemSkeleton from '@/components/book/listItem/BookItemSkeleton';
import { RECOMMENDED_BOOKS_MOCK_DATA } from '@/mocks/mockData';

const meta: Meta<typeof BookItem> = {
  component: BookItem,
  title: 'components/Book/BookItem',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ul style={{ border: '1px solid black', padding: '1rem', borderRadius: '1rem', width: '45rem' }}>
        <Story />
      </ul>
    ),
  ],
  argTypes: {
    bookItemData: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof BookItem>;

export const Default: Story = {
  args: {
    bookItemData: { ...RECOMMENDED_BOOKS_MOCK_DATA[0], publicationYear: 2025 },
  },
};

export const Skeleton: StoryObj<typeof BookItemSkeleton> = {
  render: () => <BookItemSkeleton />,
};
