'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import CloseIcon from '@/images/whiteCloseIcon.svg';

import Portal from '../Portal';

import styles from './index.module.scss';

interface FullScreenModalProps {
  children: React.ReactNode;
}
const FullScreenModal = ({ children }: FullScreenModalProps) => {
  const router = useRouter();

  const handleClosePortal = () => {
    router.back();
  };

  return (
    <Portal handleClosePortal={handleClosePortal}>
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
