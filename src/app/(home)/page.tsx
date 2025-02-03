import { BOOK_LIST_MOCK_DATA, BOOK_SIMPLE_INFO_LIST_MOCK_DATA } from '@/mocks/mockData';

import BookListSection from './_components/BookListSection';
import BooksCarouselSection from './_components/BooksCarouselSection';
import styles from './page.module.scss';

const Home = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const recommendedBooks = BOOK_SIMPLE_INFO_LIST_MOCK_DATA;
  const hotBooks = BOOK_LIST_MOCK_DATA;

  return (
    <div className={styles.homeContainer}>
      <h1 className="sr-only">BOOKER 홈페이지</h1>
      <BooksCarouselSection.Loaded title="사서 추천 도서" booksSimpleInfo={recommendedBooks} />
      <BookListSection.Loaded title="대출 급상승! 도서" bookItemsData={hotBooks} />
      <BookListSection.Loaded title="다독자를 위한 추천 도서" bookItemsData={hotBooks} />
    </div>
  );
};

export default Home;
