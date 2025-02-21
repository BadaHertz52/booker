import type { Meta, StoryObj } from '@storybook/react';

import BookList from '@/components/book/BookList';
import { BOOK_LIST_MOCK_DATA } from '@/mocks/mockData/formattingBooks';

const TITLE = '대출 급상승 도서';

const meta: Meta<typeof BookList.Loaded> = {
  component: BookList.Loaded,
  title: 'components/Book/BookList',
  tags: ['autodocs'],
  argTypes: {
    bookItemsData: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof BookList.Loaded>;

export const Default: Story = {
  args: {
    listTitle: TITLE,
    bookItemsData: BOOK_LIST_MOCK_DATA,
  },
};

export const EmptyBooks: Story = {
  args: {
    listTitle: '추천 선정 중인 도서',
    bookItemsData: [],
  },
};

export const Skeleton: StoryObj<typeof BookList.Skeleton> = {
  render: () => <BookList.Skeleton listLength={5} listTitle={TITLE} />,
};
