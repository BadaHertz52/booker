'use client';

import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import useKeydownPortal from './hooks/useKeydownPortal';
import styles from './index.module.scss';

interface Props {
  handleClosePortal?: () => void;
  children: React.ReactNode;
  extraClassName?: string;
}
const Portal = ({ handleClosePortal, children, extraClassName }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);


  const handleClick = (e: MouseEvent) => {
    if (!modalRef.current) return;
    if (!(e.target instanceof HTMLElement)) return;

    if (!modalRef.current.contains(e.target) && handleClosePortal) {
      handleClosePortal();
    }
  };

  useKeydownPortal({ modalRef, portalRoot, handleClosePortal });
  useEffect(() => {
    const root = document.getElementById('portal-root');
    setPortalRoot(root);
  }, []);

  useEffect(() => {
    if (!handleClosePortal) return;
    document.addEventListener('click', handleClick);

    return () => {
      if (!handleClosePortal) return;
      document.removeEventListener('click', handleClick);
    };
  }, []);

  if (!portalRoot) return null; // portal-root가 준비되지 않으면 렌더링하지 않음

  return createPortal(
    <div
      role="dialog"
      aria-label="portal"
      ref={modalRef}
      className={classNames(styles.portal, { [extraClassName as string]: extraClassName })}
    >
      {children}
    </div>,
    portalRoot,
  );
};

export default Portal;
