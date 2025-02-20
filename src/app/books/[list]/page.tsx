import Contents from './_components/Contents';
import { loadNewBooks } from './_services/books';
import { BooksPageParams } from './layout';

const BooksPage = async ({ params }: { params: BooksPageParams }) => {
  const { list } = await params;

  const {
    newBooks: initialBooks,
    lastPage: initialIsLastPage,
    totalBooksLength,
  } = await loadNewBooks({ list, nextPage: 1 });

  return (
    <Contents
      list={list}
      initialBooks={initialBooks}
      initialIsLastPage={initialIsLastPage}
      totalBooksLength={totalBooksLength}
    />
  );
};

export default BooksPage;
