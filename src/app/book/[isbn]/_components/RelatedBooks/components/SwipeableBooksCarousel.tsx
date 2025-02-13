import Link from 'next/link';

import { SwipeableBookCard, SwipeableCarousel } from '@/components';
import { BookItemData } from '@/types';

interface LoadedProps {
  relatedBooks: BookItemData[];
}
const Loaded = ({ relatedBooks }: LoadedProps) => {
  return (
    <SwipeableCarousel>
      {relatedBooks.map((book) => (
        <Link href={`/book/${book.isbn}`} key={book.isbn}>
          <SwipeableBookCard.Loaded bookItemData={book} />
        </Link>
      ))}
    </SwipeableCarousel>
  );
};

const Skeleton = () => {
  return (
    <SwipeableCarousel>
      {Array(5)
        .fill(0)
        .map((index) => (
          <SwipeableBookCard.Skeleton key={`swipeableBookCard-${index}`} />
        ))}
    </SwipeableCarousel>
  );
};

const SwipeableBooksCarousel = {
  Loaded,
  Skeleton,
};

export default SwipeableBooksCarousel;
