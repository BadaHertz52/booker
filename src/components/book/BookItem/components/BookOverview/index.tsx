import classNames from 'classnames';

import { BookItemData } from '@/types';

import styles from './index.module.scss';

interface BookOverviewContentProps {
  bookItemData: BookItemData;
}

const BookOverviewContent = ({ bookItemData }: BookOverviewContentProps) => {
  return (
    <div className={styles.overview}>
      <h3 className={styles.bookTitle}>{bookItemData.title}</h3>
      <ul className={styles.bookDetail}>
        <li className={styles.author}>{`${bookItemData.author} 저자(글)`}</li>
        <li className={styles.publication}>{`${bookItemData.publisher} - ${bookItemData.publicationYear}년`}</li>
      </ul>
    </div>
  );
};

const BookOverviewSkeleton = () => {
  return (
    <div className={styles.overview}>
      <div className={styles.bookTitleSkeleton} />
      <ul className={classNames(styles.bookDetail, styles.bookDetailSkeleton)}>
        <li />
        <li />
      </ul>
    </div>
  );
};

const BookOverview = {
  Content: BookOverviewContent,
  Skeleton: BookOverviewSkeleton,
};

export default BookOverview;
