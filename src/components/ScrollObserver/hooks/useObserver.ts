'use client';

import { startTransition, useEffect, useRef } from 'react';

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
          startTransition(() => {
            fetchMoreBooksAction();
          });
        }
      },
      { threshold: 1.0 },
    );

    observerRef.current?.observe(observerTargetRef.current);
  };

  const deactivateObserver = () => observerRef.current?.disconnect();

  useEffect(() => {
    if (observerRef.current && isLastPage) deactivateObserver();
    activateObserver();

    return () => deactivateObserver();
  }, [fetchMoreBooksAction, isLastPage, isPending]);

  return {
    observerTargetRef,
  };
};

export default useObserver;
