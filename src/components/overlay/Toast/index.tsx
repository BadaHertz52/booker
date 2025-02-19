'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';

import WarningIcon from '@/images/warning.svg';

import Portal from '../Portal';

import styles from './index.module.scss';

const DURATION = 3 * 1000;

interface Props {
  children: React.ReactNode;
  handleCloseToast: () => void;
  a11yMessage: string;
}
const Toast = ({ children, handleCloseToast, a11yMessage }: Props) => {
  const timeout = setTimeout(() => {
    handleCloseToast();
  }, DURATION);

  useEffect(() => {
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <Portal a11yMessage={a11yMessage}>
      <div className={styles.toast}>
        <Image src={WarningIcon} alt="" width={16} />
        {children}
      </div>
    </Portal>
  );
};

export default Toast;
