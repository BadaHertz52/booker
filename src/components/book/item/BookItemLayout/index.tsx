import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';

import NoCoverImg from '@/images/noCover.svg';
import { BookItemData } from '@/types';

import styles from './index.module.scss';

interface BookItemLayoutProps {
  bookData?: BookItemData;
  skeletonClassName?: {
    img: string;
    info: string;
  };
  handleImgRoad?: React.ReactEventHandler<HTMLImageElement>;
}

const BookItemLayout = ({ bookData, skeletonClassName, handleImgRoad }: BookItemLayoutProps) => {
  return (
    <li className={styles.item}>
      <div className={styles.imgWrapper}>
        {bookData ? (
          <Image
            src={bookData.coverImageUrl !== '' ? bookData.coverImageUrl : NoCoverImg}
            alt={`${bookData.title}도서 커버`}
            width={80}
            height={120}
            onLoad={handleImgRoad}
          />
        ) : (
          <div className={classNames({ [skeletonClassName?.img as string]: skeletonClassName })} />
        )}
      </div>
      <div className={classNames(styles.info, { [skeletonClassName?.info as string]: skeletonClassName })}>
        <p className={styles.bookTitle}>{bookData?.title ?? ''}</p>
        <p>{bookData ? `${bookData?.author} 저자(글)` : ''}</p>
        <p className={styles.publication}>
          {bookData ? `${bookData.publisher}．${bookData.publicationYear}년 출간` : ''}
        </p>
      </div>
    </li>
  );
};

export default BookItemLayout;
