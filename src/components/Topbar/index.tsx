import Image from 'next/image';
import React from 'react';

import LogoIcon from '@/images/logo.svg';

import styles from './index.module.scss';
const Topbar = () => {
  return (
    <header className={styles.topbar}>
      <div className={styles.logoContainer}>
        <Image src={LogoIcon} alt="" width={30} height={30} />
        <p className={styles.logoText}>BOOKER</p>
      </div>
      <div className={styles.searchbar}></div>
    </header>
  );
};

export default Topbar;
