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
  a11yMessage?: string;
  isFocusModal?: boolean;
}
const Portal = ({ handleClosePortal, children, extraClassName, a11yMessage, isFocusModal = false }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useKeydownPortal({ modalRef, portalRoot, handleClosePortal, isFocusModal });
  useClickPortal({ modalRef, handleClosePortal });

  useEffect(() => {
    const root = document.getElementById('portal-root');
    setPortalRoot(root);
  }, []);

  if (!portalRoot) return null; // portal-root가 준비되지 않으면 렌더링하지 않음

  return createPortal(
    <div
      role="dialog"
      aria-label={a11yMessage ?? 'portal'}
      aria-modal="true"
      ref={modalRef}
      className={classNames(styles.portal, { [extraClassName as string]: extraClassName })}
      //eslint-disable-next-line
      tabIndex={0}
    >
      {children}
    </div>,
    portalRoot,
  );
};

export default Portal;
