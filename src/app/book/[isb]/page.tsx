import { BookDetails } from '@/components';
import { BOOK_DETAIL_MOCK_DATA } from '@/mocks/mockData';

const BookDetailPage = async () => {
  return <BookDetails.Content bookDetailData={BOOK_DETAIL_MOCK_DATA} />;
};

export default BookDetailPage;
