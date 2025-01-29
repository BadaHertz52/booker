import { BooksInfinityCarousel, BookList } from '@/components';
import { HOT_BOOKS_MOCK_DATA, RECOMMENDED_BOOKS_MOCK_DATA } from '@/mocks/mockData';

import styles from './page.module.scss';

export default function Home() {
  const recommendedBooks = RECOMMENDED_BOOKS_MOCK_DATA;
  const hotBooks = HOT_BOOKS_MOCK_DATA;

  return (
    <div>
      <h1 className="sr-only">BOOKER 홈페이지</h1>
      <section className={styles.section}>
        <h2>사서 추천 도서</h2>
        <div className={styles.recommendBooksCarouselWrapper}>
          <BooksInfinityCarousel booksSimpleInfo={recommendedBooks} title="사서 추천 도서" />
        </div>
      </section>
      <section className={styles.section}>
        <h2>대출 급상승 도서</h2>
        <BookList listTitle="대출 급상승 도서" bookItemsData={hotBooks} />
      </section>
    </div>
  );
}
