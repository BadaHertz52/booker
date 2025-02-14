import classNames from 'classnames';

import { BookDetailData } from '@/types';

import styles from './index.module.scss';

interface BookOverviewLoadedProps {
  bookDetailData: BookDetailData;
}

const BookOverviewLoaded = ({ bookDetailData }: BookOverviewLoadedProps) => {
  const { author, publisher, publicationYear, loans, title } = bookDetailData;

  const bookSummary = [`${author} 저자(글)`, `${publisher}﹒${publicationYear}년`];

  if (loans.count && loans.rank) {
    bookSummary.push(`대출 ${loans.rank}위 (${loans.count}건)`);
  }

  return (
    <div className={styles.bookOverview}>
      <h1 className={styles.bookTitle}>{title}</h1>
      <ul>
        {bookSummary.map((summary) => (
          <li key={summary}>{summary}</li>
        ))}
      </ul>
    </div>
  );
};

const BookOverviewSkeleton = () => {
  return (
    <div className={styles.bookOverview}>
      <div className={classNames(styles.bookTitle, styles.titleSkeleton)} />
      <ul className={styles.bookSummarySkeleton}>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <li key={index} className={styles.bookSummarySkeleton}></li>
          ))}
      </ul>
    </div>
  );
};

const BookOverview = {
  Skeleton: BookOverviewSkeleton,
  Loaded: BookOverviewLoaded,
};

export default BookOverview;
