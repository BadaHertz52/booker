import { BooksInfinityCarousel } from '@/components';
import { BOOK_LIST_MOCK_DATA } from '@/mocks/mockData';

import BookListSection from './_components/BookListSection';
import { getLastMonthLibrarianPick } from './_services';
import styles from './page.module.scss';

const Home = async () => {
  const hotBooks = BOOK_LIST_MOCK_DATA;
  const lastMonthLibrarianPick = await getLastMonthLibrarianPick();

  return (
    <div className={styles.homeContainer}>
      <h1 className="sr-only">BOOKER 홈페이지</h1>
      <BooksInfinityCarousel.Loaded title="사서 추천 도서" booksSimpleInfo={lastMonthLibrarianPick} />
      <BookListSection.Loaded title="대출 급상승! 도서" bookItemsData={hotBooks} />
      <BookListSection.Loaded title="다독자를 위한 추천 도서" bookItemsData={hotBooks} />
    </div>
  );
};

export default Home;
