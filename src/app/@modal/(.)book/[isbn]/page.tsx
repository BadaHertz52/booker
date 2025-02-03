import { Suspense } from 'react';

import { BookDetails } from '@/app/book/[isbn]/_components';
import BookDetailsPage from '@/app/book/[isbn]/page';
import styles from '@/app/book/[isbn]/page.module.scss';
import { FullScreenModal } from '@/components';
const BookDetailModal = () => {
  return (
    <FullScreenModal>
      <Suspense
        fallback={
          <div className={styles.container}>
            <BookDetails.Skeleton />
          </div>
        }
      >
        <BookDetailsPage />
      </Suspense>
    </FullScreenModal>
  );
};

export default BookDetailModal;
