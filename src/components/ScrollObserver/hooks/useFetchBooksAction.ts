'use client';

import { useActionState, useRef, useState } from 'react';

import { BookItemData } from '@/types/books';

export type GetNewBooks = (nextPage: number) => Promise<{ newBooks: BookItemData[]; lastPage: boolean }>;
export interface UseFetchBooksActionProps {
  initialIsLastPage: boolean;
  updateBooks: (newBooks: BookItemData[]) => void;
  getNewBooks: GetNewBooks;
}

const useFetchBooksAction = ({ initialIsLastPage, updateBooks, getNewBooks }: UseFetchBooksActionProps) => {
  const [isLastPage, setIsLastPage] = useState(initialIsLastPage);
  const pageRef = useRef(1);
  //eslint-disable-next-line
  const [_, fetchMoreBooksAction, isPending] = useActionState(async () => {
    if (isLastPage) return;

    const { newBooks, lastPage } = await getNewBooks(++pageRef.current);

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
