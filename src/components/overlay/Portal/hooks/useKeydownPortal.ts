'use client';

import { useEffect, useState } from 'react';

interface UseKeydownPortalProps {
  portalRoot: HTMLElement | null;
  modalRef: React.RefObject<HTMLDivElement | null>;
  handleClosePortal?: () => void;
}

const useKeydownPortal = ({ portalRoot, modalRef, handleClosePortal }: UseKeydownPortalProps) => {
  const [focusableElements, setFocusableElements] = useState<NodeListOf<HTMLElement> | null>(null);

  const updateFocusableElement = () => {
    if (!modalRef.current) return;

    const elements = modalRef.current.querySelectorAll<HTMLElement>(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])',
    );

    setFocusableElements(elements);
  };

  const focusFirstFocusableElement = () => {
    if (!focusableElements || focusableElements.length === 0) return;
    focusableElements[0].focus();
  };

  const handleTab = (e: KeyboardEvent) => {
    if (!modalRef.current) return;
    if (e.key !== 'Tab') return;
    if (!focusableElements || focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();

      return;
    }

    if (document.activeElement === lastElement) {
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
    focusFirstFocusableElement();

    return () => {
      if (!handleClosePortal) return;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [focusFirstFocusableElement]);
};

export default useKeydownPortal;
