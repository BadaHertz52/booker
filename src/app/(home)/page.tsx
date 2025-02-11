import { BOOK_LIST_MOCK_DATA } from '@/mocks/mockData';

import BookListSection from './_components/BookListSection';
import BooksCarouselSection from './_components/BooksCarouselSection';
import { getLastMonthLibrarianPick } from './_services';
import { getPopularBooks } from './_services/books';
import styles from './page.module.scss';

const Home = async () => {
  const hotBooks = BOOK_LIST_MOCK_DATA;
  const lastMonthLibrarianPick = await getLastMonthLibrarianPick();
  const popularBooks = await getPopularBooks();
  console.log('✨✨✨✨✨', popularBooks);

  return (
    <div className={styles.homeContainer}>
      <h1 className="sr-only">BOOKER 홈페이지</h1>
      <BooksCarouselSection.Loaded title="사서 추천 도서" booksSimpleInfo={lastMonthLibrarianPick} />
      <BookListSection.Loaded title="인기 대출 도서" bookItemsData={popularBooks} />
      <BookListSection.Loaded title="다독자를 위한 추천 도서" bookItemsData={hotBooks} />
    </div>
  );
};

export default Home;
