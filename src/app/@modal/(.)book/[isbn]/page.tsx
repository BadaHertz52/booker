import { Suspense } from 'react';

import { getBookDetails } from '@/app/book/[isbn]/_services/book';
import BookDetailsLoading from '@/app/book/[isbn]/loading';
import BookDetailsPage, { BookDetailsPageParams } from '@/app/book/[isbn]/page';
import { FullScreenModal } from '@/components/overlay';

const BookDetailsModal = async ({ params }: BookDetailsPageParams) => {
  const { isbn } = await params;
  const bookDetailData = await getBookDetails(isbn);

  return (
    <>
      <FullScreenModal a11yMessage={`${bookDetailData.title}도서 상세 정보 모달`}>
        <Suspense fallback={<BookDetailsLoading />}>
          <BookDetailsPage params={params} />
        </Suspense>
      </FullScreenModal>
    </>
  );
};

export default BookDetailsModal;
