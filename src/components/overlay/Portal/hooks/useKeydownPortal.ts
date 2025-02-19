'use client';

import { useEffect, useRef, useState } from 'react';

interface UseKeydownPortalProps {
  portalRoot: HTMLElement | null;
  modalRef: React.RefObject<HTMLDivElement | null>;
  handleClosePortal?: () => void;
}

const useKeydownPortal = ({ portalRoot, modalRef, handleClosePortal }: UseKeydownPortalProps) => {
  const [focusableElements, setFocusableElements] = useState<NodeListOf<HTMLElement> | null>(null);
  const focusCountRef = useRef(0);
  const updateFocusableElement = () => {
    if (!modalRef.current) return;

    const elements = modalRef.current.querySelectorAll<HTMLElement>(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])',
    );

    setFocusableElements(elements);
  };

  const handleTab = (e: KeyboardEvent) => {
    if (!modalRef.current) return;
    if (e.key !== 'Tab') return;
    if (!focusableElements || focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    focusCountRef.current++;

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    }

    if (document.activeElement === lastElement || focusCountRef.current === 1) {
      e.preventDefault();
      firstElement.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Escape' && handleClosePortal) handleClosePortal();
    handleTab(e);
  };

  useEffect(() => {
    updateFocusableElement();
  }, [portalRoot]);

  useEffect(() => {
    if (!handleClosePortal) return;
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      if (!handleClosePortal) return;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [focusableElements]);
};

export default useKeydownPortal;
