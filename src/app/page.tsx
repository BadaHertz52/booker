import { BooksInfinityCarousel } from '@/components';
import { RECOMMENDED_BOOKS_MOCK_DATA } from '@/mocks/mockData';

import styles from './page.module.scss';

export default function Home() {
  const recommendedBooks = RECOMMENDED_BOOKS_MOCK_DATA;

  return (
    <div>
      <section className={styles.section}>
        <h2>사서 추천 도서</h2>
        <div className={styles.recommendBooksCarouselWrapper}>
          <BooksInfinityCarousel booksSimpleInfo={recommendedBooks} title="사서 추천 도서" />
        </div>
      </section>
    </div>
  );
}
