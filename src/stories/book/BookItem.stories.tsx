import type { Meta, StoryObj } from '@storybook/react';

import BookItem from '@/components/book/BookItem';
import { BOOK_SIMPLE_INFO_LIST_MOCK_DATA } from '@/mocks/mockData/formattingBooks';

const meta: Meta<typeof BookItem.Loaded> = {
  component: BookItem.Loaded,
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
type Story = StoryObj<typeof BookItem.Loaded>;

export const Default: Story = {
  args: {
    bookItemData: { ...BOOK_SIMPLE_INFO_LIST_MOCK_DATA[0], publicationYear: 2025 },
  },
};

export const Skeleton: StoryObj<typeof BookItem.Skeleton> = {
  render: () => <BookItem.Skeleton />,
};
