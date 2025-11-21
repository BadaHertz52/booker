'use client';

import { useEffect } from 'react';

interface UseClickPortalProps {
  modalRef: React.RefObject<HTMLDivElement | null>;
  handleClosePortal?: () => void;
}

const useClickPortal = ({ modalRef, handleClosePortal }: UseClickPortalProps) => {
  const handleClick = (e: MouseEvent) => {
    if (!modalRef.current) return;
    if (!(e.target instanceof HTMLElement)) return;

    if (!modalRef.current.contains(e.target) && handleClosePortal) {
      handleClosePortal();
    }
  };
  useEffect(() => {
    if (!handleClosePortal) return;
    document.addEventListener('click', handleClick);

    return () => {
      if (!handleClosePortal) return;
      document.removeEventListener('click', handleClick);
    };
  }, []);
};

export default useClickPortal;
