import Link from 'next/link';
import { useId } from 'react';

import SwipeableCarousel from '@/components/carousel/SwipeableCarousel';
import SwipeableBookCard from '@/components/carousel/SwipeableCarousel/components/SwipeableBookCard';
import { BookItemData } from '@/types/books';

interface LoadedProps {
  relatedBooks: BookItemData[];
}
const Loaded = ({ relatedBooks }: LoadedProps) => {
  return (
    <SwipeableCarousel>
      {relatedBooks.map((book) => (
        <li key={`swipeableBookCard-${book.isbn}`}>
          <Link href={`/book/${book.isbn}`}>
            <SwipeableBookCard.Loaded bookItemData={book} />
          </Link>
        </li>
      ))}
    </SwipeableCarousel>
  );
};

const Skeleton = () => {
  const id = useId();
  return (
    <SwipeableCarousel>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <SwipeableBookCard.Skeleton key={`swipeableBookCard-skeleton-${id}-${index}`} />
        ))}
    </SwipeableCarousel>
  );
};

const SwipeableBooksCarousel = {
  Loaded,
  Skeleton,
};

export default SwipeableBooksCarousel;
