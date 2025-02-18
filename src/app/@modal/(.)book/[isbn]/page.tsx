import { Suspense } from 'react';

import { BookDetails } from '@/app/book/[isbn]/_components';
import BookDetailsPage, { BookDetailsPageParams } from '@/app/book/[isbn]/page';
import styles from '@/app/book/[isbn]/page.module.scss';
import { FullScreenModal } from '@/components';

const BookDetailModal = async ({ params }: BookDetailsPageParams) => {
  return (
    <FullScreenModal>
      <Suspense
        fallback={
          <div className={styles.container}>
            <BookDetails.Skeleton />
          </div>
        }
      >
        <BookDetailsPage params={params} />
      </Suspense>
    </FullScreenModal>
  );
};

export default BookDetailModal;
