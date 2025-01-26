'use client';

import React from 'react';

import SlideController from './components/SlideController';
import SlideDisplay from './components/SlideDisplay';
import useCardWidth from './hooks/useCardWidth';
import { useSlideIndex } from './hooks/useSlideIndex';
import useSlideTransition from './hooks/useSlideTransition';
import styles from './index.module.scss';

interface InfinityCarouselProps {
  title: string;
  autoSlideDuration?: number;
  autoSlideInterval?: number;
  manualSlideDuration?: number;
  Duration?: number;
  children: React.ReactElement<HTMLElement>[];
}
const InfinityCarousel = ({
  title,
  autoSlideDuration = 1 * 1000,
  autoSlideInterval = 5 * 1000,
  manualSlideDuration = 500,
  children: cards,
}: InfinityCarouselProps) => {
  const slides = [cards[cards.length - 1], ...cards, cards[0]];

  const { currentSlideIndex, moveToNextSlide, moveToPrevSlide, moveToIndexSlide } = useSlideIndex({
    slidesLength: slides.length,
  });

  const {
    isTransitioning,
    slideTransitionDuration,
    isAbleControlSlide,
    activateTransition,
    adjustTransitionToManualDuration,

    handleSlideTransitionEnd,
    handleTransitionRun,
  } = useSlideTransition({
    slidesLength: slides.length,
    autoSlideDuration,
    manualSlideDuration,
    moveToIndexSlide,
  });

  const { cardWidth, cardRef } = useCardWidth({
    activateTransition,
  });

  return (
    <section className={styles.container} style={{ width: cardWidth, overflow: 'hidden' }}>
      <SlideDisplay
        title={title}
        cardRef={cardRef}
        slides={slides}
        cardWidth={cardWidth}
        currentSlideIndex={currentSlideIndex}
        isTransitioning={isTransitioning}
        slideTransitionDuration={slideTransitionDuration}
        handleSlideTransitionEnd={handleSlideTransitionEnd}
        handleTransitionRun={handleTransitionRun}
      />
      <SlideController
        isAbleControlSlide={isAbleControlSlide}
        currentSlideIndex={currentSlideIndex}
        cardsLength={cards.length}
        adjustTransitionToManualSpeed={adjustTransitionToManualDuration}
        autoSlideInterval={autoSlideInterval}
        moveToNextSlide={moveToNextSlide}
        moveToPrevSlide={moveToPrevSlide}
      />
    </section>
  );
};

export default InfinityCarousel;
