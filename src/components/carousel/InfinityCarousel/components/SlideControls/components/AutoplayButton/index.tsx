import Image from 'next/image';
import React from 'react';

import PauseIcon from '@/images/pause.svg';
import PlayIcon from '@/images/play.svg';

import styles from './index.module.scss';

export interface AutoPlayButtonProps {
  isAutoSlide: boolean;
  disabled: boolean;
  handlePlayButtonClick: () => void;
}

const AutoPlayButton = ({ isAutoSlide, disabled, handlePlayButtonClick }: AutoPlayButtonProps) => {
  return (
    <button onClick={handlePlayButtonClick} disabled={disabled} className={styles.button}>
      <Image src={isAutoSlide ? PauseIcon : PlayIcon} height={10} alt="" />
    </button>
  );
};

export default AutoPlayButton;
