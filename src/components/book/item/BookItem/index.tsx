'use client';

import classNames from 'classnames';
import Link from 'next/link';
import React, { useState } from 'react';

import { BookItemData } from '@/types';

import BookItemLayout from '../BookItemLayout';
import BookItemSkeleton from '../BookItemSkeleton';

import styles from './index.module.scss';

interface BookItemProps {
  bookData: BookItemData;
}

const BookItem = ({ bookData }: BookItemProps) => {
  const { title, author } = bookData;

  const [isLoaded, setIsLoaded] = useState(false);

  const handleImgLoad = () => setIsLoaded(true);

  const a11yLabel = {
    bookDescription: `도서 : ${title}, 저자 : ${author}`,
    linkInfo: `클릭 시 ${title} 도서 상세 페이지로 이동합니다.`,
    loadingState: '도서 정보를 불러오는 중입니다. 잠시만 기다려주세요.',
  };

  return (
    <li className={styles.item}>
      {!isLoaded && (
        <div className={styles.skeletonWrapper}>
          <BookItemSkeleton />
        </div>
      )}
      <Link
        href="/"
        aria-label={isLoaded ? a11yLabel.bookDescription + ' ' + a11yLabel.linkInfo : a11yLabel.loadingState}
        className={classNames(styles.contents, { [styles.on]: isLoaded })}
        aria-busy={!isLoaded}
      >
        <BookItemLayout bookData={bookData} handleImgRoad={handleImgLoad} />
      </Link>
    </li>
  );
};

export default BookItem;
