'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Suspense, useEffect } from 'react';

import BookDetailsPage from '@/app/book/[isbn]/page';
import BookDetailsLoading from '@/app/search/loading';
import Portal from '@/components/overlay/Portal';
import CloseIcon from '@/images/whiteCloseIcon.svg';

import styles from './page.module.scss';

const BookDetailModal = () => {
  const router = useRouter();
  const rootElement = document.querySelector('main');

  const preventScroll = (e: any) => {
    e.preventDefault();
  };

  const handleClosePortal = () => {
    router.back();
  };

  useEffect(() => {
    if (!rootElement) return;
    rootElement.addEventListener('wheel', preventScroll, { passive: false });
    rootElement.addEventListener('touchmove', preventScroll, { passive: false });

    // 컴포넌트 언마운트 시 이벤트 제거
    return () => {
      if (!rootElement) return;
      rootElement.removeEventListener('wheel', preventScroll);
      rootElement.removeEventListener('touchmove', preventScroll);
    };
  }, [rootElement]);

  return (
    <Portal handleClosePortal={handleClosePortal}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <button aria-label="닫기" className={styles.closeButton} onClick={handleClosePortal}>
            <Image src={CloseIcon} alt="" width={24} height={24} />
          </button>
          <Suspense fallback={<BookDetailsLoading />}>
            <BookDetailsPage />
          </Suspense>
        </div>
      </div>
    </Portal>
  );
};

export default BookDetailModal;
