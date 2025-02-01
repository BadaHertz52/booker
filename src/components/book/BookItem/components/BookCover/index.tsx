import Image from 'next/image';

import { gray200BlurDataURL } from '@/constants';
import NoCoverImg from '@/images/noCover.svg';
import { BookItemData } from '@/types';

import styles from './index.module.scss';

interface BookCoverContentProps {
  bookItemData: BookItemData;
}

const BookCoverContent = ({ bookItemData }: BookCoverContentProps) => {
  return (
    <div className={styles.imgWrapper}>
      <Image
        src={bookItemData.coverImageUrl !== '' ? bookItemData.coverImageUrl : NoCoverImg}
        placeholder="blur"
        blurDataURL={gray200BlurDataURL}
        alt=""
        fill
      />
    </div>
  );
};

const BookCoverSkeleton = () => {
  return (
    <div className={styles.imgWrapper}>
      <div className={styles.imgSkeleton} />
    </div>
  );
};

const BookCover = {
  Content: BookCoverContent,
  Skeleton: BookCoverSkeleton,
};

export default BookCover;
