import React from 'react';

import AutoPlayButton, { AutoPlayButtonProps } from './components/AutoplayButton';
import SlideNavigation, { SlideNavigationProps } from './components/SlideNavigation';
import styles from './index.module.scss';

interface SlideControllerProps extends Omit<AutoPlayButtonProps, 'disabled'>, SlideNavigationProps {}

const SlideController = ({
  isAbleControlSlide,
  currentSlideIndex,
  cards,
  handleNavigationClick,
  handlePlayButtonClick,
  isPlaying,
}: SlideControllerProps) => {
  return (
    <div className={styles.controller}>
      <AutoPlayButton
        isPlaying={isPlaying}
        disabled={!isAbleControlSlide}
        handlePlayButtonClick={handlePlayButtonClick}
      />
      <SlideNavigation
        isAbleControlSlide={isAbleControlSlide}
        currentSlideIndex={currentSlideIndex}
        cards={cards}
        handleNavigationClick={handleNavigationClick}
      />
    </div>
  );
};

export default SlideController;
