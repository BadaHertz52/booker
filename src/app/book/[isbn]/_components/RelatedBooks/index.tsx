import Link from 'next/link';

import { NoBooksYet } from '@/components';
import { SwipeableCarousel, SwipeableBookCard } from '@/components/carousel';
import { BookItemData } from '@/types';

import styles from './index.module.scss';

interface RelatedBooksProps {
  relatedBooks: BookItemData[];
}

const SwipeableBooksCarousel = ({ relatedBooks }: RelatedBooksProps) => {
  return (
    <SwipeableCarousel>
      {relatedBooks.map((book, index) => (
        <Link href={`/book/${book.isbn}`} key={book.isbn + index}>
          <SwipeableBookCard.Loaded bookItemData={book} />
        </Link>
      ))}
    </SwipeableCarousel>
  );
};

const RelatedBooks = ({ relatedBooks }: RelatedBooksProps) => {
  // TODO: 관련 도서 데이터 받아오기, key에서 index 제거
  return (
    <section className={styles.layout}>
      <h3>관련 도서</h3>
      <div className={styles.carouselWrapper}>
        {relatedBooks.length === 0 ? (
          <NoBooksYet title="관련 도서" />
        ) : (
          <SwipeableBooksCarousel relatedBooks={relatedBooks} />
        )}
      </div>
    </section>
  );
};

export default RelatedBooks;
