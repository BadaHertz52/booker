'use client';

import { useEffect, useRef } from 'react';

interface UseObserverProps {
  isLastPage: boolean;
  fetchMoreBooksAction: () => void;
  isPending: boolean;
}
const useObserver = ({ isLastPage, fetchMoreBooksAction, isPending }: UseObserverProps) => {
  const observerTargetRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const activateObserver = () => {
    if (!observerTargetRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isPending) {
          fetchMoreBooksAction();
        }
      },
      { threshold: 1.0 },
    );

    observerRef.current?.observe(observerTargetRef.current);
  };

  const deActivateObserver = () => observerRef.current?.disconnect();

  useEffect(() => {
    if (observerRef.current && isLastPage) deActivateObserver();
    activateObserver();

    return () => deActivateObserver();
  }, [fetchMoreBooksAction, isLastPage, isPending]);

  return {
    observerTargetRef,
  };
};

export default useObserver;
