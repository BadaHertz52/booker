import InfinityCarousel from '@/components/common/InfinityCarousel';
import { RECOMMENDED_BOOKS_MOCK_DATA } from '@/mocks/mockData';

import styles from './page.module.scss';

export default function Home() {
  const recommendedBooks = RECOMMENDED_BOOKS_MOCK_DATA;
  const recommendedBookCardsInfo = recommendedBooks.map((book) => ({ title: book.title }));

  return (
    <div>
      <section className={styles.section}>
        <h2>사서 추천 도서</h2>
        <div className={styles.recommendBooksCarouselWrapper}>
          <InfinityCarousel title="사서 추천 도서" cardInfoForScreenReader={recommendedBookCardsInfo}>
            {recommendedBooks.map((book) => (
              <div key={book.isbn} className={styles.fullWidthCard}>
                {book.title}
              </div>
            ))}
          </InfinityCarousel>
        </div>
      </section>
    </div>
  );
}
