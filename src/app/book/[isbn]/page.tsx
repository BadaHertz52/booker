import { Metadata } from 'next';
import { Suspense } from 'react';

import { BookDetails, RelatedBooks } from './_components';
import { getBookDetails, getBooksForMania } from './_services/book';
import styles from './page.module.scss';

const TITLE = {
  mania: '관련도서',
};
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

export const generateBookDetailsMetadata = async ({ params }: BookDetailsPageParams): Promise<Metadata> => {
  const { isbn } = await params;
  const bookDetailData = await getBookDetails(isbn);

  return {
    title: `BOOKER - ${bookDetailData.title} 도서 상세 정보`,
    description: `${bookDetailData.title}-${bookDetailData.author} 작가 : ${bookDetailData.content}`,
  };
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
