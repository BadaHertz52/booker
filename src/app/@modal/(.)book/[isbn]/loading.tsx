import BookDetailLoading from '@/app/book/[isbn]/loading';
import FullScreenModal from '@/components/overlay/FullScreenModal';

const BookDetailsModalLoading = () => {
  return (
    <FullScreenModal>
      <BookDetailLoading />
    </FullScreenModal>
  );
};

export default BookDetailsModalLoading;
