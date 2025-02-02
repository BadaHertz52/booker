import { BOOK_DETAIL_MOCK_DATA } from '@/mocks/mockData';

import BookDetails from './_components/BookDetails';

const BookDetailsPage = async () => {
  return <BookDetails.Loaded bookDetailData={BOOK_DETAIL_MOCK_DATA} />;
};

export default BookDetailsPage;
