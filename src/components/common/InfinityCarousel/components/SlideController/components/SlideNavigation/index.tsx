import Image from 'next/image';
import React from 'react';

import ArrowLeftIcon from '@/images/arrowLeft.svg';
import ArrowRightIcon from '@/images/arrowRight.svg';

import styles from './index.module.scss';

interface SlideNavigationButtonProps {
  isPrev?: boolean;
  disabled: boolean;
  handleNavigationClick: (isPrev: boolean) => void;
}

const SlideNavigationButton = ({ isPrev = false, disabled, handleNavigationClick }: SlideNavigationButtonProps) => {
  return (
    <button disabled={disabled} onClick={() => handleNavigationClick(isPrev)}>
      <Image src={isPrev ? ArrowLeftIcon : ArrowRightIcon} height={10} alt="" />
    </button>
  );
};

export interface SlideNavigationProps extends Pick<SlideNavigationButtonProps, 'handleNavigationClick'> {
  isAbleControlSlide: boolean;
  currentSlideIndex: number;
  cardsLength: number;
}

const SlideNavigation = ({
  isAbleControlSlide,
  currentSlideIndex,
  cardsLength,
  handleNavigationClick,
}: SlideNavigationProps) => {
  const getCurrentCardIndex = (currentSlideIndex: number) => {
    if (currentSlideIndex === 0) return cardsLength;
    if (currentSlideIndex > cardsLength) return currentSlideIndex - cardsLength;
    return currentSlideIndex;
  };

  return (
    <div className={styles.navigation}>
      <SlideNavigationButton
        disabled={!isAbleControlSlide}
        isPrev={true}
        handleNavigationClick={handleNavigationClick}
      />
      <p>
        {getCurrentCardIndex(currentSlideIndex)} / {cardsLength}
      </p>
      <SlideNavigationButton disabled={!isAbleControlSlide} handleNavigationClick={handleNavigationClick} />
    </div>
  );
};

export default SlideNavigation;
