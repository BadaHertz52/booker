import classNames from 'classnames';
import Image from 'next/image';

import { gray200BlurDataURL } from '@/constants';
import NoCoverImg from '@/images/noCover.svg';
import { BookItemData } from '@/types';

import styles from './index.module.scss';
interface BookCoverLoadedProps {
  imgWidth?: number;
  classNameForWidth: string;
  bookItemData: BookItemData;
}

const BookCoverLoaded = ({ bookItemData, classNameForWidth, imgWidth = 100 }: BookCoverLoadedProps) => {
  return (
    <div className={classNames(styles.imgWrapper, classNameForWidth)}>
      <Image
        src={bookItemData.coverImageUrl !== '' ? bookItemData.coverImageUrl : NoCoverImg}
        placeholder="blur"
        blurDataURL={gray200BlurDataURL}
        alt=""
        width={imgWidth}
        height={(imgWidth * 3) / 2}
        quality={100}
      />
    </div>
  );
};
interface BookCoverSkeletonProps {
  classNameForWidth: string;
}
const BookCoverSkeleton = ({ classNameForWidth }: BookCoverSkeletonProps) => {
  return (
    <div className={classNames(styles.imgWrapper, classNameForWidth)}>
      <div className={styles.imgSkeleton} />
    </div>
  );
};

const BookCover = {
  Loaded: BookCoverLoaded,
  Skeleton: BookCoverSkeleton,
};

export default BookCover;
