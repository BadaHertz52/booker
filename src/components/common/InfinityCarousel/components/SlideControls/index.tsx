import React from 'react';

import AutoPlayButton from './components/AutoplayButton';
import ManualNavigationBar from './components/ManualNavigationBar';
import { useAutoSlide, UseAutoSlideProps } from './hooks/useAutoSlide';
import styles from './index.module.scss';

interface SlideControlsProps extends UseAutoSlideProps {
  isAbleControlSlide: boolean;
  currentSlideIndex: number;
  cardsLength: number;
  adjustTransitionToManualSpeed: () => void;
  moveToNextSlide: () => void;
  moveToPrevSlide: () => void;
}

const SlideControls = ({
  isAbleControlSlide,
  currentSlideIndex,
  cardsLength,
  adjustTransitionToManualSpeed,
  moveToNextSlide,
  moveToPrevSlide,
  autoSlideInterval,
}: SlideControlsProps) => {
  const { isAutoSlide, toggleAutoSlide, clearSlideInterval } = useAutoSlide({ autoSlideInterval, moveToNextSlide });

  const handleNavigationClick = (isPrev: boolean) => {
    adjustTransitionToManualSpeed();
    clearSlideInterval();

    if (isPrev) return moveToPrevSlide();
    moveToNextSlide();
  };

  return (
    <div className={styles.controls}>
      <AutoPlayButton
        isAutoSlide={isAutoSlide}
        disabled={!isAbleControlSlide}
        handlePlayButtonClick={toggleAutoSlide}
      />
      <ManualNavigationBar
        isAbleControlSlide={isAbleControlSlide}
        currentSlideIndex={currentSlideIndex}
        cardsLength={cardsLength}
        handleNavigationClick={handleNavigationClick}
      />
    </div>
  );
};

export default SlideControls;
