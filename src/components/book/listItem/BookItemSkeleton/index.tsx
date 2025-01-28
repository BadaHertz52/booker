import React from 'react';

import BookItemLayout from '../BookItemLayout';

import styles from './index.module.scss';

const BookItemSkeleton = () => {
  return <BookItemLayout skeletonClassName={{ img: styles.img, info: styles.info }} />;
};

export default BookItemSkeleton;
