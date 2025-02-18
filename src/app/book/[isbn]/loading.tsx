import { BookDetails, RelatedBooks } from './_components';
import styles from './page.module.scss';

const BookDetailsLoading = () => {
  return (
    <div className={styles.container}>
      <BookDetails.Skeleton />
      <RelatedBooks.Skeleton title="" />
    </div>
  );
};

export default BookDetailsLoading;
