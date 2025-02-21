import Link from 'next/link';

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
