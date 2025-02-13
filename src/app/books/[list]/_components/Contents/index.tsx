'use client';

import { Suspense, useState } from 'react';

import { BookList, ScrollObserver } from '@/components';
import { BookItemData } from '@/types';

import { loadNewBooks } from '../../_services/books';

interface ContentsProps {
  list: string;
  initialBooks: BookItemData[];
  initialIsLastPage: boolean;
}

const Contents = ({ list, initialBooks, initialIsLastPage }: ContentsProps) => {
  const [books, setBooks] = useState(initialBooks);

  const updateBooks = (newBooks: BookItemData[]) => setBooks((prev) => [...prev, ...newBooks]);

  return (
    <>
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
