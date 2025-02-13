'use client';

import { Suspense, useState } from 'react';

import { BookList, ScrollObserver } from '@/components';
import { GetSearchBooksParamsParams } from '@/services/endpoints/naruEndpoint';
import { BookItemData } from '@/types';

import { getSearchBooks } from '../../_services/searchBooks';

interface SearchResultProps {
  title: string;
  initialSearchBooks: BookItemData[];
  initialIsLastPage: boolean;
  searchParams: Omit<GetSearchBooksParamsParams, 'pageNumber'>;
}

const SearchResult = ({ title, initialSearchBooks, initialIsLastPage, searchParams }: SearchResultProps) => {
  const [books, setBooks] = useState(initialSearchBooks);

  const updateBooks = (newBooks: BookItemData[]) => setBooks((prev) => [...prev, ...newBooks]);

  const getNewBooks = async (nextPage: number) => {
    const nextPageParams = { ...searchParams, pageNumber: String(nextPage) };
    const { books: newBooks, isLastPage: lastPage } = await getSearchBooks(nextPageParams);

    return { newBooks, lastPage };
  };

  return (
    <div>
      <BookList.Loaded listTitle={title} bookItemsData={books} />
      <Suspense fallback={<BookList.Skeleton listTitle={''} listLength={3} />}>
        <ScrollObserver updateBooks={updateBooks} initialIsLastPage={initialIsLastPage} getNewBooks={getNewBooks} />
      </Suspense>
    </div>
  );
};

export default SearchResult;
