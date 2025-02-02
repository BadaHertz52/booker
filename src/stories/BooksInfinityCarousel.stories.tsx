import type { Meta, StoryObj } from '@storybook/react';

import { BooksInfinityCarousel } from '@/components';
import { RECOMMENDED_BOOKS_MOCK_DATA } from '@/mocks/mockData';

const meta = {
  title: 'Components/Carousel/BooksInfinityCarousel',
  component: BooksInfinityCarousel.Content,
  tags: ['autodocs'],
} satisfies Meta<typeof BooksInfinityCarousel.Content>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    booksSimpleInfo: RECOMMENDED_BOOKS_MOCK_DATA,
    title: '추천 도서',
  },
};

export const Skeleton: StoryObj<typeof BooksInfinityCarousel.Skeleton> = {
  render: () => <BooksInfinityCarousel.Skeleton />,
};
