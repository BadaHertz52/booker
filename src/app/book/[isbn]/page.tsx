import { Suspense } from 'react';

import { BookDetails, RelatedBooks } from './_components';
import { getBookDetails, getBooksForMania } from './_services/book';
import styles from './page.module.scss';

interface AsyncComponentProps {
  isbn: string;
}

const AsyncBookDetails = async ({ isbn }: AsyncComponentProps) => {
  const bookDetailData = await getBookDetails(isbn);

  return <BookDetails.Loaded bookDetailData={bookDetailData} />;
};

export interface BookDetailsPageParams {
  params: Promise<{
    isbn: string;
  }>;
}
const TITLE = {
  mania: '관련도서',
};
const BookDetailsPage = async ({ params }: BookDetailsPageParams) => {
  const { isbn } = await params;

  return (
    <div className={styles.container}>
      <Suspense fallback={<BookDetails.Skeleton />}>
        <AsyncBookDetails isbn={isbn} />
      </Suspense>
      <Suspense fallback={<RelatedBooks.Skeleton title={TITLE.mania} />}>
        <RelatedBooks.Loaded isbn={isbn} title={TITLE.mania} fetchBooks={getBooksForMania} />
      </Suspense>
    </div>
  );
};

export default BookDetailsPage;
