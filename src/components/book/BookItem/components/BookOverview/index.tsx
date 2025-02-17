import classNames from 'classnames';
import Image from 'next/image';

import UpArrowIcon from '@/images/primaryArrowUp.svg';
import { BookItemData } from '@/types';

import styles from './index.module.scss';

interface BookOverviewLoadedProps {
  bookItemData: BookItemData;
}

const BookOverviewLoaded = ({ bookItemData }: BookOverviewLoadedProps) => {
  return (
    <div className={styles.overview}>
      <p className={styles.bookTitle}>{bookItemData.title}</p>
      <ul className={styles.bookDetail}>
        <li className={styles.author}>
          <span>{`${bookItemData.author} 저자(글)`}</span>
          {bookItemData.translator && <span>{`﹒${bookItemData.translator} 옮김`}</span>}
        </li>
        <li className={styles.publication}>{`${bookItemData.publisher} - ${bookItemData.publicationYear}년`}</li>

        {bookItemData.loanRankingIncrease && (
          <li className={styles.rankingIncrease}>
            <Image src={UpArrowIcon} alt="" width={14} height={14} />
            <p> 대출 순위 {bookItemData.loanRankingIncrease}단계 상승</p>
          </li>
        )}
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
  Loaded: BookOverviewLoaded,
  Skeleton: BookOverviewSkeleton,
};

export default BookOverview;
