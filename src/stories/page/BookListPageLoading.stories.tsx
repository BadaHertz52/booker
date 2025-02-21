import type { Meta, StoryObj } from '@storybook/react';

import { BookListPageLayout } from '@/app/books/[list]/_components/BookListPageLayout';
import BookListLoading from '@/app/books/[list]/loading';
import { BOOKS_TITLE } from '@/constants';

const LoadingComponent = ({ list }: { list: keyof typeof BOOKS_TITLE }) => {
  return (
    <BookListPageLayout list={list}>
      <BookListLoading />
    </BookListPageLayout>
  );
};

const meta = {
  title: 'Page/BookList',
  component: LoadingComponent,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'White',
    },
  },
} satisfies Meta<typeof LoadingComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Loading: Story = {
  args: {
    list: 'popular',
  },
};
