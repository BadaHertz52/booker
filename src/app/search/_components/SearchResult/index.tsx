'use client';

import { Suspense, useState } from 'react';

import { BookList } from '@/components';
import { GetSearchBooksParamsParams } from '@/services/endpoints/naruEndpoint';
import { BookItemData } from '@/types';

import Observer from '../Observer';

interface SearchResultProps {
  title: string;
  initialSearchBooks: BookItemData[];
  initialIsLastPage: boolean;
  searchParams: Omit<GetSearchBooksParamsParams, 'pageNumber'>;
}

const SearchResult = ({ title, initialSearchBooks, initialIsLastPage, searchParams }: SearchResultProps) => {
  const [books, setBooks] = useState(initialSearchBooks);

  const updateBooks = (newBooks: BookItemData[]) => setBooks((prev) => [...prev, ...newBooks]);

  return (
    <div>
      <BookList.Loaded listTitle={title} bookItemsData={books} />
      <Suspense fallback={<BookList.Skeleton listTitle={''} listLength={3} />}>
        <Observer searchParams={searchParams} updateBooks={updateBooks} initialIsLastPage={initialIsLastPage} />
      </Suspense>
    </div>
  );
};

export default SearchResult;
