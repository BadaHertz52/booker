import { Suspense } from 'react';

import BookListSection from './_components/BookListSection';
import BooksCarouselSection from './_components/BooksCarouselSection';
import { getLastMonthLibrarianPick } from './_services';
import { getPopularBooks, getRisingBooks } from './_services/books';
import styles from './page.module.scss';

const TITLE = {
  librarianPick: '사서 추천 도서',
  popular: '인기 대출 도서',
  risingBooks: '급상승! 대출 도서',
};

const SKELTON_LIST_LENGTH = 5;

const AsyncBooksCarousel = async () => {
  const lastMonthLibrarianPick = await getLastMonthLibrarianPick();

  return <BooksCarouselSection.Loaded title={TITLE.librarianPick} booksSimpleInfo={lastMonthLibrarianPick} />;
};

interface AsyncBooksParams {
  title: string;
  getBooks: () => Promise<any>;
}
const AsyncBooks = async ({ title, getBooks }: AsyncBooksParams) => {
  const books = await getBooks();

  return <BookListSection.Loaded title={title} bookItemsData={books} />;
};

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className="sr-only">BOOKER 홈페이지</h1>
      <Suspense fallback={<BooksCarouselSection.Skeleton title={TITLE.librarianPick} />}>
        <AsyncBooksCarousel />
      </Suspense>
      <Suspense fallback={<BookListSection.Skeleton listTitle={TITLE.popular} listLength={SKELTON_LIST_LENGTH} />}>
        <AsyncBooks title={TITLE.popular} getBooks={getPopularBooks} />
      </Suspense>
      <Suspense fallback={<BookListSection.Skeleton listTitle={TITLE.risingBooks} listLength={SKELTON_LIST_LENGTH} />}>
        <AsyncBooks title={TITLE.risingBooks} getBooks={getRisingBooks} />
      </Suspense>
    </div>
  );
};

export default Home;
