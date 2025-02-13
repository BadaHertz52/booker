import { getPopularBooks } from '@/app/(home)/_services/books';

import Contents from './_components/Contents';
import { BooksPageParams } from './layout';

const BooksPage = async ({ params }: { params: BooksPageParams }) => {
  const { list } = await params;

  const getInitialBooks = async (nextPage: number) => {
    if (list === 'popular') {
      const result = await getPopularBooks({ pageNo: nextPage.toString(), pageSize: '10' });
      return result;
    }

    return { books: [], isLastPage: true };
  };

  const { books: initialBooks, isLastPage: initialIsLastPage } = await getInitialBooks(1);

  return <Contents list={list} initialBooks={initialBooks} initialIsLastPage={initialIsLastPage} />;
};

export default BooksPage;
