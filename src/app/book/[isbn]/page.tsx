import { BOOK_DETAIL_MOCK_DATA, BOOK_LIST_MOCK_DATA } from '@/mocks/mockData';

import { BookDetails, RelatedBooks } from './_components';
import styles from './page.module.scss';

const BookDetailsPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div className={styles.container}>
      <BookDetails.Loaded bookDetailData={BOOK_DETAIL_MOCK_DATA} />
      <RelatedBooks relatedBooks={BOOK_LIST_MOCK_DATA} />
    </div>
  );
};

export default BookDetailsPage;
