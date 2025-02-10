import Image from 'next/image';
import React from 'react';

import GiftImg from '@/images/gift.svg';

import { gray200BlurDataURL } from '../../../constants/blurDataURL';

import styles from './index.module.scss';

interface NoBooksYetProps {
  title: string;
}
const NoBooksYet = ({ title }: NoBooksYetProps) => {
  return (
    <div className={styles.container}>
      <Image src={GiftImg} alt="" blurDataURL={gray200BlurDataURL} height={80} width={80} />
      <div className={styles.message}>
        <p>아직 {title}가 준비되지 않았어요</p>
        <p>곧 멋진 책들을 소개해 드릴게요</p>
      </div>
    </div>
  );
};

export default NoBooksYet;
