import Link from 'next/link';

import { SwipeableCarousel, SwipeableBookCard } from '@/components/carousel';
import { HOT_BOOKS_MOCK_DATA } from '@/mocks/mockData';

import styles from './index.module.scss';

const RelatedBooks = () => {
  const relatedBooks = [...HOT_BOOKS_MOCK_DATA, ...HOT_BOOKS_MOCK_DATA];
  // TODO: 관련 도서 데이터 받아오기, key에서 index 제거
  return (
    <div className={styles.layout}>
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
    </div>
  );
};

export default RelatedBooks;
