import React from 'react';

import styles from '@/components/book/list/bookList.module.scss';
import BookItem from '@/components/book/listItem/BookItem';
import { BookItemData } from '@/types';
interface BookListProps {
  listTitle: string;
  bookItemsData: BookItemData[];
}

const BookList = ({ listTitle, bookItemsData }: BookListProps) => {
  return (
    <ul aria-label={listTitle} className={styles.list}>
      {bookItemsData.map((book) => (
        <BookItem key={book.title} bookItemData={book} />
      ))}
    </ul>
  );
};

export default BookList;
