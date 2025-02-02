import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import NoCoverImage from '@/images/noCover.svg';
import { BookSimpleInfo } from '@/types';

import InfinityCarousel, { InfinityCarouselProps } from '../InfinityCarousel';

import styles from './index.module.scss';

export interface BooksInfinityCarouselProps
  extends Omit<InfinityCarouselProps, 'children' | 'cardsInfoForScreenReader'> {
  booksSimpleInfo: BookSimpleInfo[];
}

const BooksInfinityCarouselLoaded = ({ booksSimpleInfo, title }: BooksInfinityCarouselProps) => {
  const cardsInfoForScreenReader = booksSimpleInfo.map((book) => ({ title: book.title }));

  return (
    <div className={styles.booksCarouselWrapper}>
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
    </div>
  );
};

const BooksInfinityCarouselSkeleton = () => {
  return (
    <div className={styles.booksCarouselWrapper}>
      <div aria-hidden="true" className={classNames(styles.fullWidthCard, styles.cardSkeleton)} />
    </div>
  );
};

const BooksInfinityCarousel = {
  Loaded: BooksInfinityCarouselLoaded,
  Skeleton: BooksInfinityCarouselSkeleton,
};

export default BooksInfinityCarousel;
