import type { Meta, StoryObj } from '@storybook/react';

import { BookList, BookListSkeleton } from '@/components';
import { HOT_BOOKS_MOCK_DATA } from '@/mocks/mockData';

const TITLE = '대출 급상승 도서';

const meta: Meta<typeof BookList> = {
  component: BookList,
  title: 'components/Book/BookList',
  tags: ['autodocs'],
  argTypes: {
    bookItemsData: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof BookList>;

export const Default: Story = {
  args: {
    listTitle: TITLE,
    bookItemsData: HOT_BOOKS_MOCK_DATA,
  },
};

export const Skeleton: StoryObj<typeof BookListSkeleton> = {
  render: () => <BookListSkeleton listLength={5} listTitle={TITLE} />,
};
