import { BooksInfinityCarousel, BookList } from '@/components';
import { HOT_BOOKS_MOCK_DATA, RECOMMENDED_BOOKS_MOCK_DATA } from '@/mocks/mockData';

import styles from './page.module.scss';

const Home = async () => {
  const recommendedBooks = RECOMMENDED_BOOKS_MOCK_DATA;
  const hotBooks = HOT_BOOKS_MOCK_DATA;

  return (
    <div className={styles.homeContainer}>
      <h1 className="sr-only">BOOKER 홈페이지</h1>
      <section className={styles.section}>
        <h2>사서 추천 도서</h2>
        <div className={styles.recommendBooksCarouselWrapper}>
          <BooksInfinityCarousel booksSimpleInfo={recommendedBooks} title="사서 추천 도서" />
        </div>
      </section>
      <section className={styles.section}>
        <h2>대출 급상승! 도서</h2>
        <BookList.Content listTitle="대출 급상승 도서" bookItemsData={hotBooks} />
      </section>
      <section className={styles.section}>
        <h2>다독자를 위한 추천 도서</h2>
        <BookList.Content listTitle="대출 급상승 도서" bookItemsData={hotBooks} />
      </section>
    </div>
  );
};

export default Home;
