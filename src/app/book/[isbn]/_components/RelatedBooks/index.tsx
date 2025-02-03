import Link from 'next/link';

import { SwipeableCarousel, SwipeableBookCard } from '@/components/carousel';
import { BookItemData } from '@/types';

import styles from './index.module.scss';

interface RelatedBooksProps {
  relatedBooks: BookItemData[];
}

const RelatedBooks = ({ relatedBooks }: RelatedBooksProps) => {
  // TODO: 관련 도서 데이터 받아오기, key에서 index 제거
  return (
    <section className={styles.layout}>
      <h3>관련 도서</h3>
      <div className={styles.carouselWrapper}>
        <SwipeableCarousel>
          {relatedBooks.map((book, index) => (
            <Link href={`/book/${book.isbn}`} key={book.isbn + index}>
              <SwipeableBookCard.Loaded bookItemData={book} />
            </Link>
          ))}
        </SwipeableCarousel>
      </div>
    </section>
  );
};

export default RelatedBooks;
