import Image from 'next/image';
import React from 'react';

import { gray200BlurDataURL } from '@/constants';
import NotFoundImage from '@/images/notFound.svg';

import styles from './index.module.scss';

interface NotFoundProps {
  children: React.ReactNode;
}

const NotFound = ({ children }: NotFoundProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image alt="" fill src={NotFoundImage} placeholder="blur" blurDataURL={gray200BlurDataURL} />
      </div>
      {children}
    </div>
  );
};

export default NotFound;
