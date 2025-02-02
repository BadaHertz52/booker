import { BookDetails } from '@/components';
import { BOOK_DETAIL_MOCK_DATA } from '@/mocks/mockData';

const BookDetailsPage = async () => {
  return <BookDetails.Loaded bookDetailData={BOOK_DETAIL_MOCK_DATA} />;
};

export default BookDetailsPage;
