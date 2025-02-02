import { BookCover } from '@/components/book';
import { BookItemData } from '@/types';

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

const SwipeableBookCard = {
  Loaded,
};
export default SwipeableBookCard;
