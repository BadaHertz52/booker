import type { BookDetailData } from '@/types/books';

import BookCover from './components/BookCover';
import BookDescription from './components/BookDescription';
import BookOverview from './components/BookOverview';

interface BookDetailProps {
  bookDetailData: BookDetailData;
}

const BookDetailsContent = ({ bookDetailData }: BookDetailProps) => {
  return (
    <section>
      <BookCover.Content bookDetailData={bookDetailData} />
      <BookOverview.Content bookDetailData={bookDetailData} />
      <BookDescription.Content bookDetailData={bookDetailData} />
    </section>
  );
};

const BookDetailsSkeleton = () => {
  return (
    <section>
      <BookCover.Skeleton />
      <BookOverview.Skeleton />
      <BookDescription.Skeleton />
    </section>
  );
};

const BookDetails = {
  Content: BookDetailsContent,
  Skeleton: BookDetailsSkeleton,
};

export default BookDetails;
