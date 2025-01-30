'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import { gray200BlurDataURL } from '@/constants';
import ErrorIcon from '@/images/error.svg';

import styles from './index.module.scss';

interface ErrorNotificationProps {
  children: React.ReactNode;
  reset: () => void;
}
const ErrorNotification = ({ children, reset }: ErrorNotificationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === '/';

  const moveToHome = () => {
    router.push('/');
  };
  return (
    <div className={styles.errorNotification}>
      <Image src={ErrorIcon} alt="" width={140} height={140} placeholder="blur" blurDataURL={gray200BlurDataURL} />
      {children}
      <button className={styles.resetButton} onClick={reset}>
        다시 시도하기
      </button>
      {!isHome && (
        <button className={styles.homeButton} onClick={moveToHome}>
          홈으로 돌아가기
        </button>
      )}
    </div>
  );
};

export default ErrorNotification;
