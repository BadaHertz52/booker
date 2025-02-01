import Image from 'next/image';

import NoCoverImage from '@/images/noCover.svg';
import { BookSimpleInfo } from '@/types';

import InfinityCarousel, { InfinityCarouselProps } from '../InfinityCarousel';

import styles from './index.module.scss';

interface BooksInfinityCarouselProps extends Omit<InfinityCarouselProps, 'children' | 'cardsInfoForScreenReader'> {
  booksSimpleInfo: BookSimpleInfo[];
}

const BooksInfinityCarousel = ({ booksSimpleInfo, title }: BooksInfinityCarouselProps) => {
  const cardsInfoForScreenReader = booksSimpleInfo.map((book) => ({ title: book.title }));

  return (
    <div className={styles.booksCarouselWrapper}>
      <InfinityCarousel title={title} cardsInfoForScreenReader={cardsInfoForScreenReader}>
        {booksSimpleInfo.map((book) => (
          <div key={book.isbn} className={styles.fullWidthCard}>
            <div className={styles.bookInfo}>
              <h3 className={styles.bookTitle}>{book.title}</h3>
              <ul>
                <li className={styles.bookAuthorAndPublisher}>
                  {book.author} / {book.publisher}
                </li>
                <li className={styles.bookContents}>{book.contents}</li>
              </ul>
            </div>
            <div className={styles.imgWrapper}>
              <Image src={book.coverImageUrl !== '' ? book.coverImageUrl : NoCoverImage} alt={book.title} fill />
            </div>
          </div>
        ))}
      </InfinityCarousel>
    </div>
  );
};

export default BooksInfinityCarousel;
