'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import CloseIcon from '@/images/whiteCloseIcon.svg';

import Portal from '../Portal';

import styles from './index.module.scss';

interface FullScreenModalProps {
  children: React.ReactNode;
  a11yMessage?: string;
}
const FullScreenModal = ({ children, a11yMessage }: FullScreenModalProps) => {
  const htmlElement = document.querySelector('html');

  const router = useRouter();

  const handleClosePortal = () => {
    router.back();
  };

  useEffect(() => {
    htmlElement?.classList.add('overflow-hidden');
    return () => {
      htmlElement?.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <Portal a11yMessage={a11yMessage} handleClosePortal={handleClosePortal}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <button aria-label="닫기" className={styles.closeButton} onClick={handleClosePortal}>
            <Image src={CloseIcon} alt="" width={24} height={24} />
          </button>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default FullScreenModal;
