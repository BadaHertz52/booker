import React from 'react';

import AutoPlayButton, { AutoPlayButtonProps } from '../AutoPlayButton';
import SlideNavigation, { SlideNavigationProps } from '../SlideNavigation';

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
    <div>
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
