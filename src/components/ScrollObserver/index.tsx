'user client';

import { useObserver } from './hooks';
import useFetchBooksAction, { UseFetchBooksActionParams } from './hooks/useFetchBooksAction';

const ScrollObserver = (params: UseFetchBooksActionParams) => {
  const { fetchMoreBooksAction, isPending, isLastPage } = useFetchBooksAction(params);
  const { observerTargetRef } = useObserver({ isLastPage, isPending, fetchMoreBooksAction });

  return <>{!isLastPage && <div ref={observerTargetRef} style={{ height: '1px' }} />}</>;
};

export default ScrollObserver;
