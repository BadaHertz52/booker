import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { gray200BlurDataURL } from '@/constants';
import NoCoverImage from '@/images/noCover.svg';
import { BookSimpleInfo } from '@/types';

import styles from './index.module.scss';

interface BookCardProps {
  book: BookSimpleInfo;
  imgPriority: boolean;
}

const BookCard = ({ book, imgPriority }: BookCardProps) => {
  const makeAuthors = (book: BookSimpleInfo) => {
    let authors = `${book.author} 저자`;

    if (book.translator) {
      authors += `﹒${book.translator} 옮김`;
    }
    return authors;
  };

  return (
    <Link
      aria-label={`링크 선택 시, ${book.title} 도서 상세 페이지로 이동합니다.`}
      className={styles.fullWidthCard}
      href={`/book/${book.isbn}`}
      key={book.isbn}
    >
      <div className={styles.bookCover}>
        <div className={styles.imgWrapper}>
          <Image
            src={book.coverImageUrl !== '' ? book.coverImageUrl : NoCoverImage}
            alt={book.title}
            fill
            blurDataURL={gray200BlurDataURL}
            priority={imgPriority}
          />
        </div>
      </div>
      <div className={styles.bookInfo}>
        <h3 className={styles.bookTitle}>{book.title}</h3>
        <ul>
          <li className={styles.bookAuthorAndPublisher}>
            {makeAuthors(book)}&nbsp;/&nbsp;{book.publisher}
          </li>
          <li className={styles.bookContent}>{book.content}</li>
        </ul>
      </div>
    </Link>
  );
};

export default React.memo(BookCard);
