'user client';

import { useActionState, useEffect, useRef, useState } from 'react';

import { GetSearchBooksParamsParams } from '@/services/endpoints/naruEndpoint';
import { BookItemData } from '@/types';

import { getSearchBooks } from '../../_services/searchBooks';

interface ObserverProps {
  initialIsLastPage: boolean;
  updateBooks: (newBooks: BookItemData[]) => void;
  searchParams: Omit<GetSearchBooksParamsParams, 'pageNumber'>;
}

const Observer = ({ initialIsLastPage, updateBooks, searchParams }: ObserverProps) => {
  const observerTargetRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isLastPage, setIsLastPage] = useState(initialIsLastPage);
  const pageRef = useRef(1);

  const [state, fetchMoreBooksAction, isPending] = useActionState(async () => {
    if (isLastPage) return;

    const nextPageParams = { ...searchParams, pageNumber: String(pageRef.current + 1) };
    const { books: newBooks, isLastPage: lastPage } = await getSearchBooks(nextPageParams);

    updateBooks(newBooks);
    pageRef.current += 1;
    setIsLastPage(lastPage);
  }, null);

  useEffect(() => {
    if (!observerTargetRef.current) return;
    if (observerRef.current && isLastPage) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isPending) {
          fetchMoreBooksAction();
        }
      },
      { threshold: 1.0 },
    );

    observerRef.current?.observe(observerTargetRef.current);

    return () => observerRef.current?.disconnect();
  }, [fetchMoreBooksAction, isLastPage, isPending]);

  return (
    <>
      {isLastPage && !initialIsLastPage ? (
        <p>더 이상 불러올 도서 목록이 없어요</p>
      ) : (
        <div ref={observerTargetRef} style={{ height: '1px' }} />
      )}
    </>
  );
};

export default Observer;
