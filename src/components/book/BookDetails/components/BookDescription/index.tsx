import { BookDetailData } from '@/types';

import styles from './index.module.scss';

interface BookDescriptionLoadedProps {
  bookDetailData: BookDetailData;
}

const BookDescriptionLoaded = ({ bookDetailData }: BookDescriptionLoadedProps) => {
  const formateDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <div className={styles.bookDescription}>
      <h2>책 소개</h2>
      <div className={styles.bookCategory}>
        <h3>책 분야</h3>
        <p>{bookDetailData.category}</p>
      </div>
      <div className={styles.bookLoaded}>
        <h3>책 내용</h3>
        <pre>{bookDetailData.content}</pre>
      </div>
      <div className={styles.bookInfo}>
        <h3>기본 정보</h3>
        <table>
          <caption className="sr-only">{bookDetailData.title} 기본 정보</caption>
          <tbody>
            <tr>
              <th scope="row">ISBN</th>
              <td>{bookDetailData.isbn}</td>
            </tr>
            <tr>
              <th scope="row">출판 일자</th>
              <td>{formateDate(bookDetailData.publicationDate)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const BookDescriptionSkeleton = () => {
  return (
    <div className={styles.bookDescription}>
      <div className={styles.h2Skeleton} />
      <div className={styles.bookCategory}>
        <div className={styles.h3Skeleton} />
        <div className={styles.categorySkeleton} />
      </div>
      <div className={styles.bookLoadedSkeleton}>
        <div className={styles.h3Skeleton} />
        <div className={styles.contentSkeleton}>
          <p />
          <p />
        </div>
      </div>
    </div>
  );
};

const BookDescription = {
  Loaded: BookDescriptionLoaded,
  Skeleton: BookDescriptionSkeleton,
};

export default BookDescription;
