import { BOOK_LIST_MOCK_DATA } from '@/mocks/mockData';

import { BookDetails, RelatedBooks } from './_components';
import { getBookDetails } from './_services/book';
import styles from './page.module.scss';

interface PageParams {
  params: Promise<{
    isbn: string;
  }>;
}

const BookDetailsPage = async ({ params }: PageParams) => {
  const { isbn } = await params;
  const bookDetailData = await getBookDetails(isbn);

  return (
    <div className={styles.container}>
      <BookDetails.Loaded bookDetailData={bookDetailData} />
      <RelatedBooks relatedBooks={BOOK_LIST_MOCK_DATA} />
    </div>
  );
};

export default BookDetailsPage;
