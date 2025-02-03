import type { Meta, StoryObj } from '@storybook/react';

import { BookList } from '@/components';
import { BOOK_LIST_MOCK_DATA } from '@/mocks/mockData';

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

export const Skeleton: StoryObj<typeof BookList.Skeleton> = {
  render: () => <BookList.Skeleton listLength={5} listTitle={TITLE} />,
};
