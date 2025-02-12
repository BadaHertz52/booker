import { BOOK_DETAIL_MOCK_DATA, BOOK_LIST_MOCK_DATA } from '@/mocks/mockData';

import { getDetailBook } from '../_services/book';

import { BookDetails, RelatedBooks } from './_components';
import styles from './page.module.scss';

interface PageParams {
  params: Promise<{
    isbn: string;
  }>;
}

const BookDetailsPage = async ({ params }: PageParams) => {
  const { isbn } = await params;
  const bookDetailData = await getDetailBook(isbn);

  return (
    <div className={styles.container}>
      <BookDetails.Loaded bookDetailData={bookDetailData} />
      <RelatedBooks relatedBooks={BOOK_LIST_MOCK_DATA} />
    </div>
  );
};

export default BookDetailsPage;
