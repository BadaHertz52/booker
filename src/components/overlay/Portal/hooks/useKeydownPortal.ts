'use client';

import { useEffect, useRef, useState } from 'react';

interface UseKeydownPortalProps {
  portalRoot: HTMLElement | null;
  modalRef: React.RefObject<HTMLDivElement | null>;
  handleClosePortal?: () => void;
  isFocusFirstFocusableEl?: boolean;
}

const useKeydownPortal = ({
  portalRoot,
  modalRef,
  handleClosePortal,
  isFocusFirstFocusableEl,
}: UseKeydownPortalProps) => {
  const [focusableElements, setFocusableElements] = useState<HTMLElement[] | null>(null);
  const focusCountRef = useRef(0);

  const handleFocusFirstFocusableEl = () => {
    if (!focusableElements || !isFocusFirstFocusableEl) return;

    focusableElements[0].focus();
    focusCountRef.current++;
  };

  const updateFocusableElement = () => {
    if (!modalRef.current) return;

    const elements = modalRef.current.querySelectorAll<HTMLElement>(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])',
    );
    setFocusableElements([...elements]);
  };

  const handleTab = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;
    if (!focusableElements || focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    }

    if (document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }

    focusCountRef.current++;
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Escape' && handleClosePortal) handleClosePortal();
    handleTab(e);
  };

  useEffect(() => {
    if (!portalRoot) return;
    updateFocusableElement();
  }, [modalRef.current, portalRoot]);

  useEffect(() => {
    handleFocusFirstFocusableEl();
  }, [focusableElements, isFocusFirstFocusableEl]);

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
