import React from 'react';

import { NoBooksYet } from '@/components';
import { BookItemData } from '@/types';

import BookItem from '../BookItem';

import styles from './index.module.scss';

interface BookListLoadedProps {
  listTitle: string;
  bookItemsData: BookItemData[];
}

const BookListLoaded = ({ listTitle, bookItemsData }: BookListLoadedProps) => {
  return (
    <>
      {bookItemsData.length === 0 ? (
        <NoBooksYet title={listTitle} />
      ) : (
        <ul aria-label={listTitle} className={styles.list}>
          {bookItemsData.map((book) => (
            <BookItem.Loaded key={book.isbn} bookItemData={book} />
          ))}
        </ul>
      )}
    </>
  );
};

export interface BookListSkeletonProps {
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
  Loaded: BookListLoaded,
  Skeleton: BookListSkeleton,
};

export default BookList;
