import Image from 'next/image';
import React, { useEffect } from 'react';

import WarningIcon from '@/images/warning.svg';

import Portal from '../Portal';

import styles from './index.module.scss';

const DURATION = 3 * 1000;

interface Props {
  children: React.ReactNode;
  handleCloseToast: () => void;
}
const Toast = ({ children, handleCloseToast }: Props) => {
  const timeout = setTimeout(() => {
    handleCloseToast();
  }, DURATION);

  useEffect(() => {
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <Portal extraClassName={styles.toastPortal}>
      <div className={styles.toast}>
        <Image src={WarningIcon} alt="" width={16} />
        {children}
      </div>
    </Portal>
  );
};

export default Toast;
