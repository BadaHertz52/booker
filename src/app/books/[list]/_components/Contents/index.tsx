'use client';

import { Suspense, useState } from 'react';

import BookList from '@/components/book/BookList';
import A11yMessage from '@/components/common/A11yMessage';
import ScrollObserver from '@/components/ScrollObserver';
import { BookItemData } from '@/types/books';

import { loadNewBooks } from '../../_services/books';

interface ContentsProps {
  list: string;
  initialBooks: BookItemData[];
  initialIsLastPage: boolean;
  totalBooksLength: number;
}

const Contents = ({ list, initialBooks, initialIsLastPage, totalBooksLength }: ContentsProps) => {
  const [books, setBooks] = useState(initialBooks);

  const updateBooks = (newBooks: BookItemData[]) => setBooks((prev) => [...prev, ...newBooks]);
  let booksLengthA11yMessage = `${totalBooksLength}권의 도서 중 ${books.length}권를 불러습니다.`;

  if (totalBooksLength > books.length) {
    booksLengthA11yMessage += '스크롤 시 도서를 불러올 수 있습니다.';
  }

  return (
    <>
      <A11yMessage message={booksLengthA11yMessage} isAbleTab={true} />
      <BookList.Loaded listTitle={''} bookItemsData={books} />
      <Suspense fallback={<BookList.Skeleton listTitle={''} listLength={3} />}>
        <ScrollObserver
          updateBooks={updateBooks}
          initialIsLastPage={initialIsLastPage}
          getNewBooks={(nextPage: number) => loadNewBooks({ nextPage, list })}
        />
      </Suspense>
    </>
  );
};

export default Contents;
