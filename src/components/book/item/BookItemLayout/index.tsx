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
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        {bookData ? (
          <Image
            src={bookData.coverImageUrl !== '' ? bookData.coverImageUrl : NoCoverImg}
            alt={bookData.title !== '' ? `${bookData.title}도서 커버` : '도서 커버 대체 이미지'}
            width={80}
            height={120}
            onLoad={handleImgRoad}
          />
        ) : (
          <div className={classNames({ [skeletonClassName?.img as string]: skeletonClassName })} role="presentation" />
        )}
      </div>
      <div
        className={classNames(styles.info, { [skeletonClassName?.info as string]: skeletonClassName })}
        role={skeletonClassName ? 'presentation' : 'contentinfo'}
      >
        <h3 className={styles.bookTitle}>{bookData?.title ?? ''}</h3>
        <ul className={styles.bookDetail}>
          <li>{bookData ? `${bookData?.author} 저자(글)` : ''}</li>
          <li className={styles.publication}>
            {bookData ? `${bookData.publisher}．${bookData.publicationYear}년 출간` : ''}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BookItemLayout;
