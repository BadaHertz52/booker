import type { Meta, StoryObj } from '@storybook/react';

import BooksInfinityCarousel from '@/components/carousel/BooksInfinityCarousel';
import { BOOK_SIMPLE_INFO_LIST_MOCK_DATA } from '@/mocks/mockData/formattingBooks';

const meta = {
  title: 'Components/Carousel/BooksInfinityCarousel',
  component: BooksInfinityCarousel.Loaded,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'White',
    },
  },
} satisfies Meta<typeof BooksInfinityCarousel.Loaded>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    booksSimpleInfo: BOOK_SIMPLE_INFO_LIST_MOCK_DATA,
    title: '추천 도서',
  },
};

export const EmptyBooks: Story = {
  args: {
    booksSimpleInfo: [],
    title: '반민초파 😎 도서',
  },
};

export const Skeleton: StoryObj<typeof BooksInfinityCarousel.Skeleton> = {
  render: () => <BooksInfinityCarousel.Skeleton />,
};
