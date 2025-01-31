import Image from 'next/image';
import React from 'react';

import NotFoundImage from '@/images/notFound.svg';

import styles from './index.module.scss';

interface NotFoundSearchResultProps {
  children: React.ReactNode;
}

const NotFoundSearchResult = ({ children }: NotFoundSearchResultProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image alt="" fill src={NotFoundImage} />
      </div>
      {children}
    </div>
  );
};

export default NotFoundSearchResult;
