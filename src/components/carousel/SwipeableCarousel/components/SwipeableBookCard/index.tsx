import classNames from 'classnames';

import BookCover from '@/components/book/BookCover';
import { BookItemData } from '@/types/books';

import styles from './index.module.scss';

interface SwipeableBookCardProps {
  bookItemData: BookItemData;
}

const Loaded = ({ bookItemData }: SwipeableBookCardProps) => {
  return (
    <div className={styles.container}>
      <BookCover.Loaded bookItemData={bookItemData} classNameForWidth={styles.cover} />
      <div className={styles.bookInfo}>
        <p className={styles.title}>{bookItemData.title}</p>
        <p className={styles.author}>{bookItemData.author}</p>
      </div>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className={styles.container}>
      <BookCover.Skeleton classNameForWidth={styles.cover} />
      <div className={classNames(styles.bookInfo, styles.bookInfoSkeleton)}>
        <div className={styles.title} />
        <div className={styles.author} />
      </div>
    </div>
  );
};

const SwipeableBookCard = {
  Loaded,
  Skeleton,
};
export default SwipeableBookCard;
