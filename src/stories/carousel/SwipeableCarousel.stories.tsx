import type { Meta, StoryObj } from '@storybook/react';
import { Suspense } from 'react';

import RelatedBooks from '@/app/book/[isbn]/_components/RelatedBooks';
import SwipeableCarousel from '@/components/carousel/SwipeableCarousel';
import { BOOK_LIST_MOCK_DATA } from '@/mocks/mockData/formattingBooks';

const meta = {
  title: 'Components/Carousel/SwipeableCarousel',
  component: SwipeableCarousel,
  tags: ['autodocs'],
} satisfies Meta<typeof SwipeableCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const CARDS = [
  { title: 'BOOKER - SwipeableCarousel 사용법' },
  { title: '좌우로 스와이프하며 카드를 이동할 수 있어요' },
  { title: '카드 이동 시, 프로그레스바가 이동해요' },
  { title: 'BOOKER - SwipeableCarousel 사용법' },
  { title: '좌우로 스와이프하며 카드를 이동할 수 있어요' },
  { title: '카드 이동 시, 프로그레스바가 이동해요' },
];

const COLORS = ['#ffc300', '#d1fbba', '#7bf0f7', '#d6b0e1', '#9387ff', '#0af7bf'];

export const Default: Story = {
  args: {
    children: CARDS.map((info, index) => (
      <div
        key={info.title}
        style={{
          width: '50rem',
          height: '20rem',
          padding: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS[index],
          fontSize: '1.6rem',
        }}
      >
        <p>{info.title}</p>
      </div>
    )),
  },
  render: (args) => (
    <div style={{ width: '70rem', height: '30rem' }}>
      <SwipeableCarousel {...args} />
    </div>
  ),
};

export const BooksSwipeableCarousel: StoryObj<typeof RelatedBooks.Loaded> = {
  args: {
    isbn: '1234567890123',
    title: '관련도서',
    fetchBooks: async () => {
      return [...BOOK_LIST_MOCK_DATA, ...BOOK_LIST_MOCK_DATA];
    },
  },
  render: (args) => (
    <div style={{ width: '70rem', height: '60rem', display: 'flex', alignItems: 'center', backgroundColor: 'white' }}>
      <Suspense fallback={<RelatedBooks.Skeleton title={args.title} />}>
        <RelatedBooks.Loaded {...args} />
      </Suspense>
    </div>
  ),
};

export const EmptyBooksSwipeableCarousel: StoryObj<typeof RelatedBooks.Loaded> = {
  args: {
    isbn: '1234567890123',
    title: '관련도서',
    fetchBooks: async () => {
      return [];
    },
  },
  render: (args) => (
    <div style={{ width: '70rem', height: '60rem', display: 'flex', alignItems: 'center', backgroundColor: 'white' }}>
      <Suspense fallback={<RelatedBooks.Skeleton title={args.title} />}>
        <RelatedBooks.Loaded {...args} />
      </Suspense>
    </div>
  ),
};

export const BooksSwipeableCarouselSkeleton: StoryObj<typeof RelatedBooks.Loaded> = {
  args: {
    title: '관련도서',
  },
  render: (args) => (
    <div style={{ width: '70rem', height: '60rem', display: 'flex', alignItems: 'center', backgroundColor: 'white' }}>
      <RelatedBooks.Skeleton {...args} />
    </div>
  ),
};
