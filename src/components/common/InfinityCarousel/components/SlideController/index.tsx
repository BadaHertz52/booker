import React from 'react';

import AutoPlayButton from './components/AutoplayButton';
import SlideNavigation from './components/SlideNavigation';
import { useAutoSlide, UseAutoSlideProps } from './hooks/useAutoSlide';
import styles from './index.module.scss';

interface SlideControllerProps extends UseAutoSlideProps {
  isAbleControlSlide: boolean;
  currentSlideIndex: number;
  cardsLength: number;
  adjustTransitionToManualSpeed: () => void;
  moveToNextSlide: () => void;
  moveToPrevSlide: () => void;
}

const SlideController = ({
  isAbleControlSlide,
  currentSlideIndex,
  cardsLength,
  adjustTransitionToManualSpeed,
  moveToNextSlide,
  moveToPrevSlide,
  ...hooksProps
}: SlideControllerProps) => {
  const { isAutoSlide, toggleAutoSlide, clearSlideInterval } = useAutoSlide(hooksProps);

  const handleNavigationClick = (isPrev: boolean) => {
    adjustTransitionToManualSpeed();
    clearSlideInterval();

    if (isPrev) return moveToPrevSlide();
    moveToNextSlide();
  };

  return (
    <div className={styles.controller}>
      <AutoPlayButton
        isAutoSlide={isAutoSlide}
        disabled={!isAbleControlSlide}
        handlePlayButtonClick={toggleAutoSlide}
      />
      <SlideNavigation
        isAbleControlSlide={isAbleControlSlide}
        currentSlideIndex={currentSlideIndex}
        cardsLength={cardsLength}
        handleNavigationClick={handleNavigationClick}
      />
    </div>
  );
};

export default SlideController;
