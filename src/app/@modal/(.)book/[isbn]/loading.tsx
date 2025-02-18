import BookDetailLoading from '@/app/book/[isbn]/loading';
import { FullScreenModal } from '@/components';

const BookDetailsModalLoading = () => {
  return (
    <FullScreenModal>
      <BookDetailLoading />
    </FullScreenModal>
  );
};

export default BookDetailsModalLoading;
