'user client';

import { useObserver } from './hooks';
import useFetchBooksAction, { UseFetchBooksActionProps } from './hooks/useFetchBooksAction';

const ScrollObserver = (props: UseFetchBooksActionProps) => {
  const { fetchMoreBooksAction, isPending, isLastPage } = useFetchBooksAction(props);
  const { observerTargetRef } = useObserver({ isLastPage, isPending, fetchMoreBooksAction });

  return <>{!isLastPage && <div ref={observerTargetRef} style={{ height: '1px' }} />}</>;
};

export default ScrollObserver;
