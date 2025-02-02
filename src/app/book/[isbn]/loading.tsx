import { BookDetails } from './_components';
import styles from './page.module.scss';
const BookDetailLoading = () => {
  return (
    <div className={styles.container}>
      <BookDetails.Skeleton />
    </div>
  );
};

export default BookDetailLoading;
