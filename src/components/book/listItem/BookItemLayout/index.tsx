import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';

import NoCoverImg from '@/images/noCover.svg';
import { BookItemData } from '@/types';

import styles from './index.module.scss';

interface BookItemLayoutProps {
  bookItemData?: BookItemData;
  skeletonClassName?: {
    img: string;
    info: string;
  };
  handleImgRoad?: React.ReactEventHandler<HTMLImageElement>;
}

const BookItemLayout = ({ bookItemData, skeletonClassName, handleImgRoad }: BookItemLayoutProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        {bookItemData ? (
          <Image
            src={bookItemData.coverImageUrl !== '' ? bookItemData.coverImageUrl : NoCoverImg}
            alt=""
            width={80}
            height={120}
            onLoad={handleImgRoad}
          />
        ) : (
          <div className={classNames({ [skeletonClassName?.img as string]: skeletonClassName })} />
        )}
      </div>
      <div className={classNames(styles.info, { [skeletonClassName?.info as string]: skeletonClassName })}>
        <h3 className={styles.bookTitle}>{bookItemData?.title ?? ''}</h3>
        <ul className={styles.bookDetail}>
          <li>{bookItemData ? `${bookItemData?.author} 저자(글)` : ''}</li>
          <li className={styles.publication}>
            {bookItemData ? `${bookItemData.publisher}．${bookItemData.publicationYear}년 출간` : ''}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BookItemLayout;
