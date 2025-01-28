'use client';

import classNames from 'classnames';
import React, { useState } from 'react';

import { BookItemData } from '@/types';

import BookItemLayout from '../BookItemLayout';
import BookItemSkeleton from '../BookItemSkeleton';

import styles from './index.module.scss';

interface BookItemProps {
  bookData: BookItemData;
}

const BookItem = ({ bookData }: BookItemProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImgLoad = () => setIsLoaded(true);

  return (
    <li className={styles.item}>
      {!isLoaded && (
        <div className={styles.skeletonWrapper}>
          <BookItemSkeleton />
        </div>
      )}
      <div className={classNames(styles.contents, { [styles.on]: isLoaded })}>
        <BookItemLayout bookData={bookData} handleImgRoad={handleImgLoad} />
      </div>
    </li>
  );
};

export default BookItem;
