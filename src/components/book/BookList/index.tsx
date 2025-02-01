import React from 'react';

import { BookItemData } from '@/types';

import BookItem from '../BookItem';

import styles from './index.module.scss';

interface BookListContentProps {
  listTitle: string;
  bookItemsData: BookItemData[];
}

const BookListContent = ({ listTitle, bookItemsData }: BookListContentProps) => {
  return (
    <ul aria-label={listTitle} className={styles.list}>
      {bookItemsData.map((book) => (
        <BookItem.Content key={book.title} bookItemData={book} />
      ))}
    </ul>
  );
};

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
          <BookItem.Skeleton />
        </li>
      ))}
    </ul>
  );
};

const BookList = {
  Content: BookListContent,
  Skeleton: BookListSkeleton,
};

export default BookList;
