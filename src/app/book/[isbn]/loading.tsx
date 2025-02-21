import BookDetails from './_components/BookDetails';
import RelatedBooks from './_components/RelatedBooks';
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
