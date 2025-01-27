'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import NoCoverImage from '@/images/noCover.svg';
import { BookSimpleInfo } from '@/types';
import { debounce } from '@/utils/debounce';

import InfinityCarousel, { InfinityCarouselProps } from '../InfinityCarousel';

import styles from './index.module.scss';

interface BooksInfinityCarouselProps extends Omit<InfinityCarouselProps, 'children' | 'cardsInfoForScreenReader'> {
  booksSimpleInfo: BookSimpleInfo[];
}

const DESKTOP_DIMENSIONS = { width: 120, height: 180 };
const MOBILE_DIMENSIONS = { width: 80, height: 120 };
const MOBILE_BREAKPOINT = 768;
const DEBOUNCE_TIME = 100;

const BooksInfinityCarousel = ({ booksSimpleInfo, title }: BooksInfinityCarouselProps) => {
  const cardsInfoForScreenReader = booksSimpleInfo.map((book) => ({ title: book.title }));
  const [dimensions, setDimensions] = useState(DESKTOP_DIMENSIONS);

  const handleResizeDimensions = debounce(() => {
    const width = window.innerWidth;

    if (width <= MOBILE_BREAKPOINT) {
      setDimensions(MOBILE_DIMENSIONS);
    } else {
      setDimensions(DESKTOP_DIMENSIONS);
    }
  }, DEBOUNCE_TIME);

  useEffect(() => {
    handleResizeDimensions();

    window.addEventListener('resize', handleResizeDimensions);

    return () => {
      window.removeEventListener('resize', handleResizeDimensions);
    };
  }, []);

  return (
    <div className={styles.booksCarouselWrapper}>
      <InfinityCarousel title={title} cardsInfoForScreenReader={cardsInfoForScreenReader}>
        {booksSimpleInfo.map((book) => (
          <div key={book.isbn} className={styles.fullWidthCard}>
            <Image
              src={book.coverImageUrl !== '' ? book.coverImageUrl : NoCoverImage}
              alt={book.title}
              {...dimensions}
            />
            <div className={styles.bookInfo}>
              <h3>{book.title}</h3>
              <p className={styles.bookAuthorAndPublisher}>
                {book.author} / {book.publisher}
              </p>
              <p className={styles.bookContents}>{book.contents}</p>
            </div>
          </div>
        ))}
      </InfinityCarousel>
    </div>
  );
};

export default BooksInfinityCarousel;
