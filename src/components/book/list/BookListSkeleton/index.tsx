import React from 'react';

import styles from '@/components/book/list/bookList.module.scss';
import BookItemSkeleton from '@/components/book/listItem/BookItemSkeleton';

interface BookListSkeletonProps {
  listTitle: string;
  listLength: number;
}
const BookListSkeleton = ({ listTitle, listLength }: BookListSkeletonProps) => {
  const list = Array.from({ length: listLength }, (_, index) => `${listTitle}-book-skeleton-${index + 1}`);
  return (
    <ul aria-label={`${listTitle} 목록을 불러오고 있는 중 입니다. 잠시만 기다려주세요.`} className={styles.list}>
      {list.map((item) => (
        <li key={item} aria-hidden>
          <BookItemSkeleton />
        </li>
      ))}
    </ul>
  );
};

export default BookListSkeleton;
