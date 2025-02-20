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
        <li key={book.isbn}>
          <Link href={`/book/${book.isbn}`}>
            <SwipeableBookCard.Loaded bookItemData={book} />
          </Link>
        </li>
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
