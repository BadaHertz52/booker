'use client';

import { useActionState, useRef, useState } from 'react';

import { getSearchBooks } from '@/app/search/_services/searchBooks';
import { GetSearchBooksParamsParams } from '@/services/endpoints/naruEndpoint';
import { BookItemData } from '@/types';

export interface UseFetchBooksActionParams {
  initialIsLastPage: boolean;
  updateBooks: (newBooks: BookItemData[]) => void;
  searchParams: Omit<GetSearchBooksParamsParams, 'pageNumber'>;
}
const useFetchBooksAction = ({ initialIsLastPage, updateBooks, searchParams }: UseFetchBooksActionParams) => {
  const [isLastPage, setIsLastPage] = useState(initialIsLastPage);
  const pageRef = useRef(1);
  //eslint-disable-next-line
  const [_, fetchMoreBooksAction, isPending] = useActionState(async () => {
    if (isLastPage) return;

    const nextPageParams = { ...searchParams, pageNumber: String(pageRef.current + 1) };
    const { books: newBooks, isLastPage: lastPage } = await getSearchBooks(nextPageParams);

    updateBooks(newBooks);
    pageRef.current += 1;
    setIsLastPage(lastPage);
  }, null);

  return {
    fetchMoreBooksAction,
    isPending,
    isLastPage,
  };
};

export default useFetchBooksAction;
