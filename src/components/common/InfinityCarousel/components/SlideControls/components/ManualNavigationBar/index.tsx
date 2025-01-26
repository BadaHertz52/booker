import Image from 'next/image';
import React from 'react';

import ArrowLeftIcon from '@/images/arrowLeft.svg';
import ArrowRightIcon from '@/images/arrowRight.svg';

import styles from './index.module.scss';

interface ManualNavigationButtonProps {
  isPrev?: boolean;
  disabled: boolean;
  handleNavigationClick: (isPrev: boolean) => void;
}

const ManualNavigationButton = ({ isPrev = false, disabled, handleNavigationClick }: ManualNavigationButtonProps) => {
  return (
    <button disabled={disabled} onClick={() => handleNavigationClick(isPrev)}>
      <Image src={isPrev ? ArrowLeftIcon : ArrowRightIcon} height={10} alt="" />
    </button>
  );
};

export interface ManualNavigationBarProps extends Pick<ManualNavigationButtonProps, 'handleNavigationClick'> {
  isAbleControlSlide: boolean;
  currentSlideIndex: number;
  cardsLength: number;
}

const ManualNavigationBar = ({
  isAbleControlSlide,
  currentSlideIndex,
  cardsLength,
  handleNavigationClick,
}: ManualNavigationBarProps) => {
  const getCurrentCardIndex = (currentSlideIndex: number) => {
    if (currentSlideIndex === 0) return cardsLength;
    if (currentSlideIndex > cardsLength) return currentSlideIndex - cardsLength;
    return currentSlideIndex;
  };

  return (
    <div className={styles.navigation}>
      <ManualNavigationButton
        disabled={!isAbleControlSlide}
        isPrev={true}
        handleNavigationClick={handleNavigationClick}
      />
      <p>
        {getCurrentCardIndex(currentSlideIndex)} / {cardsLength}
      </p>
      <ManualNavigationButton disabled={!isAbleControlSlide} handleNavigationClick={handleNavigationClick} />
    </div>
  );
};

export default ManualNavigationBar;
