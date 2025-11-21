import classNames from 'classnames';

import type { BookDetailData } from '@/types/books';

import BookCover from './components/BookCover';
import BookDescription from './components/BookDescription';
import BookOverview from './components/BookOverview';
import styles from './index.module.scss';
interface BookDetailProps {
  bookDetailData: BookDetailData;
}

const BookDetailsLoaded = ({ bookDetailData }: BookDetailProps) => {
  return (
    <section className={styles.container}>
      <BookCover.Loaded bookDetailData={bookDetailData} />
      <BookOverview.Loaded bookDetailData={bookDetailData} />
      <BookDescription.Loaded bookDetailData={bookDetailData} />
    </section>
  );
};

const BookDetailsSkeleton = () => {
  return (
    <section className={classNames(styles.container, styles.containerSkeleton)}>
      <BookCover.Skeleton />
      <BookOverview.Skeleton />
      <BookDescription.Skeleton />
    </section>
  );
};

const BookDetails = {
  Loaded: BookDetailsLoaded,
  Skeleton: BookDetailsSkeleton,
};

export default BookDetails;
