'user client';

import { useObserver } from './hooks';
import useFetchBooksAction, { UseFetchBooksActionParams } from './hooks/useFetchBooksAction';

const Observer = (params: UseFetchBooksActionParams) => {
  const { fetchMoreBooksAction, isPending, isLastPage } = useFetchBooksAction(params);
  const { observerTargetRef } = useObserver({ isLastPage, isPending, fetchMoreBooksAction });

  return (
    <>
      {isLastPage && !params.initialIsLastPage ? (
        <p>더 이상 불러올 도서 목록이 없어요</p>
      ) : (
        <div ref={observerTargetRef} style={{ height: '1px' }} />
      )}
    </>
  );
};

export default Observer;
