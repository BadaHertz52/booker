'use client';

import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './index.module.scss';

interface Props {
  handleClosePortal?: () => void;
  children: React.ReactNode;
  extraClassName?: string;
}
const Portal = ({ handleClosePortal, children, extraClassName }: Props) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  const handleClick = (e: MouseEvent) => {
    if (!divRef.current) return;
    if (!(e.target instanceof HTMLElement)) return;

    if (!divRef.current.contains(e.target) && handleClosePortal) {
      handleClosePortal();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Escape' && handleClosePortal) handleClosePortal();
  };

  useEffect(() => {
    const root = document.getElementById('portal-root');
    setPortalRoot(root);
  }, []);

  useEffect(() => {
    if (!handleClosePortal) return;
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      if (!handleClosePortal) return;
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!portalRoot) return null; // portal-root가 준비되지 않으면 렌더링하지 않음

  return createPortal(
    <div
      role="dialog"
      aria-label="portal"
      ref={divRef}
      className={classNames(styles.portal, { [extraClassName as string]: extraClassName })}
    >
      {children}
    </div>,
    portalRoot,
  );
};

export default Portal;
