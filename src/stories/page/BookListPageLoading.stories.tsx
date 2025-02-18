import type { Meta, StoryObj } from '@storybook/react';

import { BookListPageLayout, TITLE } from '@/app/books/[list]/layout';
import BookListLoading from '@/app/books/[list]/loading';

const LoadingComponent = ({ list }: { list: keyof typeof TITLE }) => {
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
