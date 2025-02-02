import { BOOK_DETAIL_MOCK_DATA } from '@/mocks/mockData';

import { BookDetails, RelatedBooks } from './_components';
import styles from './page.module.scss';

const BookDetailsPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div className={styles.container}>
      <BookDetails.Loaded bookDetailData={BOOK_DETAIL_MOCK_DATA} />
      <RelatedBooks />
    </div>
  );
};

export default BookDetailsPage;
