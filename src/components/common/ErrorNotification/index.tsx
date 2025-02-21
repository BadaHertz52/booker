'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { lazy } from 'react';

import { gray200BlurDataURL } from '@/constants/blurDataURL';
import ErrorIcon from '@/images/error.svg';

const HomeButton = lazy(() => import('../HomeButton'));

import styles from './index.module.scss';

interface ErrorNotificationProps {
  children: React.ReactNode;
  reset: () => void;
}
const ErrorNotification = ({ children, reset }: ErrorNotificationProps) => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <div className={styles.errorNotification}>
      <Image
        className={styles.errorIcon}
        src={ErrorIcon}
        alt=""
        width={140}
        height={140}
        placeholder="blur"
        blurDataURL={gray200BlurDataURL}
      />
      {children}
      <button className={styles.resetButton} onClick={reset}>
        다시 시도하기
      </button>
      {!isHome && <HomeButton extraClassName={styles.homeButton} />}
    </div>
  );
};

export default ErrorNotification;
