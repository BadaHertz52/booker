import Link from 'next/link';
import React from 'react';

import { BookItemData } from '@/types';

import BookCover from './components/BookCover';
import BookOverview from './components/BookOverview';
import styles from './index.module.scss';

interface BookItemProps {
  bookItemData: BookItemData;
}

const BookItemContent = ({ bookItemData }: BookItemProps) => {
  const { title, author } = bookItemData;

  const a11yLabel = {
    bookDescription: `도서 : ${title}, 저자 : ${author}`,
    linkInfo: `클릭 시 ${title} 도서 상세 페이지로 이동합니다.`,
    loadingState: '도서 정보를 불러오는 중입니다. 잠시만 기다려주세요.',
  };

  return (
    <li className={styles.item}>
      <Link href="/" aria-label={a11yLabel.bookDescription + ' ' + a11yLabel.linkInfo}>
        <div className={styles.container}>
          <BookCover.Content bookItemData={bookItemData} />
          <BookOverview.Content bookItemData={bookItemData} />
        </div>
      </Link>
    </li>
  );
};

const BookItemSkeleton = () => {
  return (
    <div className={styles.container}>
      <BookCover.Skeleton />
      <BookOverview.Skeleton />
    </div>
  );
};

const BookItem = {
  Content: BookItemContent,
  Skeleton: BookItemSkeleton,
};

export default BookItem;
