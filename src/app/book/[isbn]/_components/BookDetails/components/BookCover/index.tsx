import Image from 'next/image';

import { gray200BlurDataURL } from '@/constants/blurDataURL';
import { BookDetailData } from '@/types/books';

import styles from './index.module.scss';

interface BookCoverLayoutProps {
  bookDetailData?: BookDetailData;
}

const BookCoverLayout = ({ bookDetailData }: BookCoverLayoutProps) => {
  return (
    <div
      className={styles.coverImageContainer}
      style={bookDetailData ? { backgroundImage: `url(${bookDetailData.coverImageUrl})` } : {}}
    >
      <div className={styles.coverImageWrapper}>
        {bookDetailData ? (
          <Image
            src={bookDetailData.coverImageUrl}
            alt={`[${bookDetailData.title}] 도서 표지`}
            fill
            placeholder="blur"
            blurDataURL={gray200BlurDataURL}
            quality={100}
          />
        ) : (
          <div className={styles.coverImageSkeleton}></div>
        )}
      </div>
    </div>
  );
};

const BookCoverSkeleton = () => {
  return <BookCoverLayout />;
};

const BookCoverLoaded = ({ bookDetailData }: BookCoverLayoutProps) => {
  return <BookCoverLayout bookDetailData={bookDetailData} />;
};

const BookCover = {
  Skeleton: BookCoverSkeleton,
  Loaded: BookCoverLoaded,
};

export default BookCover;
