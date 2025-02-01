import BookDetails from '@/components/book/details';
import { BOOK_DETAIL_MOCK_DATA } from '@/mocks/mockData';

const BookDetailPage = () => {
  return <BookDetails bookDetailData={BOOK_DETAIL_MOCK_DATA} />;
};

export default BookDetailPage;
