'use client';

import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import useClickPortal from './hooks/useClickPortal';
import useKeydownPortal from './hooks/useKeydownPortal';
import styles from './index.module.scss';

interface Props {
  handleClosePortal?: () => void;
  children: React.ReactNode;
  extraClassName?: string;
  isFocusFirstFocusableEl?: boolean;
}
const Portal = ({ handleClosePortal, children, extraClassName, isFocusFirstFocusableEl = false }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useKeydownPortal({ modalRef, portalRoot, handleClosePortal, isFocusFirstFocusableEl });
  useClickPortal({ modalRef, handleClosePortal });

  useEffect(() => {
    const root = document.getElementById('portal-root');
    setPortalRoot(root);
  }, []);

  if (!portalRoot) return null; // portal-root가 준비되지 않으면 렌더링하지 않음

  return createPortal(
    <div ref={modalRef} className={classNames(styles.portal, { [extraClassName as string]: extraClassName })}>
      {children}
    </div>,
    portalRoot,
  );
};

export default Portal;
