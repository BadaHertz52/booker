import { Suspense } from 'react';

import BookDetailsLoading from '@/app/book/[isbn]/loading';
import BookDetailsPage, { BookDetailsPageParams } from '@/app/book/[isbn]/page';
import { FullScreenModal } from '@/components';

const BookDetailsModal = async ({ params }: BookDetailsPageParams) => {
  return (
    <FullScreenModal a11yMessage="도서 상세 정보 모달">
      <Suspense fallback={<BookDetailsLoading />}>
        <BookDetailsPage params={params} />
      </Suspense>
    </FullScreenModal>
  );
};

export default BookDetailsModal;
