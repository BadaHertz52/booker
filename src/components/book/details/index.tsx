import Image from 'next/image';

import { gray200BlurDataURL } from '@/constants';
import type { BookDetailData } from '@/types/books';

import styles from './index.module.scss';

interface BookDetailProps {
  bookDetailData: BookDetailData;
}

const BookDetails = ({ bookDetailData }: BookDetailProps) => {
  const { title, contents, author, publisher, publicationYear, publicationDate, category, loans, isbn } =
    bookDetailData;
  const bookSummary = [
    `${author} 저자(글)`,
    `${publisher}﹒${publicationYear}년`,
    `대출 ${loans.rank}위 (${loans.count}건)`,
  ];

  const formateDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <section>
      <div
        aria-hidden="true"
        className={styles.coverImageContainer}
        style={{ backgroundImage: `url(${bookDetailData.coverImageUrl})` }}
      >
        <div className={styles.coverImageWrapper}>
          <Image
            src={bookDetailData.coverImageUrl}
            alt={`[${title}] 도서 표지`}
            fill
            placeholder="blur"
            blurDataURL={gray200BlurDataURL}
          />
        </div>
      </div>
      <div className={styles.bookOverview}>
        <h1 className={styles.bookTitle}>{title}</h1>
        <ul>
          {bookSummary.map((summary) => (
            <li key={summary}>{summary}</li>
          ))}
        </ul>
      </div>
      <div className={styles.bookDescription}>
        <h2>책 소개</h2>
        <div className={styles.bookCategory}>
          <h3>책 분야</h3>
          <p>{category}</p>
        </div>
        <div className={styles.bookContents}>
          <h3>책 내용</h3>
          <pre>{contents}</pre>
        </div>
        <div className={styles.bookInfo}>
          <h3>기본 정보</h3>
          <table>
            <caption className="sr-only">{title} 기본 정보</caption>
            <tbody>
              <tr>
                <th scope="row">ISBN</th>
                <td>{isbn}</td>
              </tr>
              <tr>
                <th scope="row">출판 일자</th>
                <td>{formateDate(publicationDate)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
