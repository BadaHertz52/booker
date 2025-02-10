import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import NoCoverImage from '@/images/noCover.svg';
import { BookSimpleInfo } from '@/types';

import InfinityCarousel, { InfinityCarouselProps } from '../InfinityCarousel';

import styles from './index.module.scss';

export interface BooksInfinityCarouselProps
  extends Omit<InfinityCarouselProps, 'children' | 'cardsInfoForScreenReader'> {
  booksSimpleInfo: BookSimpleInfo[];
}

const BooksInfinityCarouselLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.booksCarouselWrapper}>{children}</div>;
};

const BooksInfinityCarouselLoaded = ({ booksSimpleInfo, title }: BooksInfinityCarouselProps) => {
  const cardsInfoForScreenReader = booksSimpleInfo.map((book) => ({ title: book.title }));

  return (
    <BooksInfinityCarouselLayout>
      <InfinityCarousel title={title} cardsInfoForScreenReader={cardsInfoForScreenReader}>
        {booksSimpleInfo.map((book) => (
          <Link
            aria-label={`링크 선택 시, ${book.title} 도서 상세 페이지로 이동합니다.`}
            className={styles.fullWidthCard}
            href={`/book/${book.isbn}`}
            key={book.isbn}
          >
            <div className={styles.bookCover}>
              <div className={styles.imgWrapper}>
                <Image src={book.coverImageUrl !== '' ? book.coverImageUrl : NoCoverImage} alt={book.title} fill />
              </div>
            </div>
            <div className={styles.bookInfo}>
              <h3 className={styles.bookTitle}>{book.title}</h3>
              <ul>
                <li className={styles.bookAuthorAndPublisher}>
                  {book.author} / {book.publisher}
                </li>
                <li className={styles.bookContent}>{book.content}</li>
              </ul>
            </div>
          </Link>
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
      <div className={classNames(styles.fullWidthCard, styles.emptyBooksMessageContainer)}>
        <p>아직 {title}가 준비되지 않았어요 🥲</p>
        <p>곧 멋진 책들을 소개해 드릴게요 📖✨</p>
      </div>
    </BooksInfinityCarouselLayout>
  );
};

const BooksInfinityCarousel = {
  Loaded: BooksInfinityCarouselLoaded,
  Skeleton: BooksInfinityCarouselSkeleton,
  EmptyBooks,
};

export default BooksInfinityCarousel;
