import classNames from 'classnames';
import React from 'react';

import { NoBooksYet } from '@/components/common';
import { BookSimpleInfo } from '@/types';

import InfinityCarousel, { InfinityCarouselProps } from '../InfinityCarousel';

import BookCard from './components/BookCard';
import styles from './index.module.scss';

export interface BooksInfinityCarouselProps
  extends Omit<InfinityCarouselProps, 'children' | 'cardsInfoForScreenReader'> {
  booksSimpleInfo: BookSimpleInfo[];
}

const BooksInfinityCarouselLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.booksCarouselWrapper}>{children}</div>;
};

const BooksInfinityCarouselLoaded = ({ booksSimpleInfo, title }: BooksInfinityCarouselProps) => {
  if (booksSimpleInfo.length === 0) return <EmptyBooks title={title} />;
  const cardsInfoForScreenReader = booksSimpleInfo.map((book) => ({ title: book.title }));

  return (
    <BooksInfinityCarouselLayout>
      <InfinityCarousel title={title} cardsInfoForScreenReader={cardsInfoForScreenReader}>
        {booksSimpleInfo.map((book, index) => (
          <BookCard key={book.isbn} book={book} imgPriority={index === 0} />
        ))}
      </InfinityCarousel>
    </BooksInfinityCarouselLayout>
  );
};

const BooksInfinityCarouselSkeleton = () => {
  return (
    <BooksInfinityCarouselLayout>
      <div aria-hidden="true" className={classNames(styles.fullWidthCard, styles.cardSkeleton)} />
    </BooksInfinityCarouselLayout>
  );
};

interface EmptyBooksProps {
  title: string;
}
const EmptyBooks = ({ title }: EmptyBooksProps) => {
  return (
    <BooksInfinityCarouselLayout>
      <NoBooksYet title={title} />
    </BooksInfinityCarouselLayout>
  );
};

const BooksInfinityCarousel = {
  Loaded: BooksInfinityCarouselLoaded,
  Skeleton: BooksInfinityCarouselSkeleton,
};

export default BooksInfinityCarousel;
