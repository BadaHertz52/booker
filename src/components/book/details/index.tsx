import Image from 'next/image';

import { gray200BlurDataURL } from '@/constants';
import type { BookDetailData } from '@/types/books';

import styles from './index.module.scss';

interface BookDetailProps {
  bookDetailData: BookDetailData;
}

const BookDetails = ({ bookDetailData }: BookDetailProps) => {
  const { contents, author, publisher, publicationYear, category, loans } = bookDetailData;
  const bookSummary = [
    `${author} 저자(글)`,
    `${publisher} - ${publicationYear}년`,
    `${category}`,
    `대출 순위 - ${loans.rank} (${loans.count}건)`,
  ];
  return (
    <div>
      <section>
        <div
          className={styles.bookSummaryContainer}
          style={{ backgroundImage: `url(${bookDetailData.coverImageUrl})` }}
        >
          <div className={styles.coverImageWrapper}>
            <Image
              src={bookDetailData.coverImageUrl}
              alt={bookDetailData.title}
              fill
              placeholder="blur"
              blurDataURL={gray200BlurDataURL}
            />
            <h1>{bookDetailData.title}</h1>
            <ul>
              {bookSummary.map((summary) => (
                <li key={summary}>{summary}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>{contents}</div>
      </section>
      <section>도서 소장 조회</section>
    </div>
  );
};

export default BookDetails;
