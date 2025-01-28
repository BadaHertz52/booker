import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';

import NoCoverImg from '@/images/noCover.svg';

import styles from './index.module.scss';

interface BookItemLayoutProps {
  bookInfo?: {
    isbn: number;
    title: string;
    coverImageUrl: string;
    author: string;
    publisher: string;
    publicationYear: number;
  };
  skeletonClassName?: {
    img: string;
    info: string;
  };
  handleImgRoad?: React.ReactEventHandler<HTMLImageElement>;
}

const BookItemLayout = ({ bookInfo, skeletonClassName, handleImgRoad }: BookItemLayoutProps) => {
  return (
    <li className={styles.item}>
      <div className={styles.imgWrapper}>
        {bookInfo ? (
          <Image
            src={bookInfo.coverImageUrl !== '' ? bookInfo.coverImageUrl : NoCoverImg}
            alt={`${bookInfo.title}도서 커버`}
            width={80}
            height={120}
            onLoad={handleImgRoad}
          />
        ) : (
          <div className={classNames({ [skeletonClassName?.img as string]: skeletonClassName })} />
        )}
      </div>
      <div className={classNames(styles.info, { [skeletonClassName?.info as string]: skeletonClassName })}>
        <p className={styles.bookTitle}>{bookInfo?.title ?? ''}</p>
        <p>{bookInfo ? `${bookInfo?.author} 저자(글)` : ''}</p>
        <p className={styles.publication}>
          {bookInfo ? `${bookInfo.publisher}．${bookInfo.publicationYear}년 출간` : ''}
        </p>
      </div>
    </li>
  );
};

export default BookItemLayout;
