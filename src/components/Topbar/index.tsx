import Image from 'next/image';
import React from 'react';

import LogoIcon from '@/images/logo.svg';

import Searchbar from '../Searchbar';

import styles from './index.module.scss';

const CATEGORY_NAME: Record<string, string> = {
  title: '도서',
  author: '저자',
} as const;

const Topbar = () => {
  return (
    <header className={styles.topbar}>
      <div className={styles.logoContainer}>
        <Image src={LogoIcon} alt="" width={30} height={30} />
        <p className={styles.logoText}>BOOKER</p>
      </div>
      <Searchbar categoryInfo={CATEGORY_NAME} />
    </header>
  );
};

export default Topbar;
