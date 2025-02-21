'user client';

import useFetchBooksAction, { UseFetchBooksActionProps } from './hooks/useFetchBooksAction';
import useObserver from './hooks/useObserver';

const ScrollObserver = (props: UseFetchBooksActionProps) => {
  const { fetchMoreBooksAction, isPending, isLastPage } = useFetchBooksAction(props);
  const { observerTargetRef } = useObserver({ isLastPage, isPending, fetchMoreBooksAction });

  return <>{!isLastPage && <div ref={observerTargetRef} style={{ minHeight: '1px' }} />}</>;
};

export default ScrollObserver;
