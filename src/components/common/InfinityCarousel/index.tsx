'use client';

import React from 'react';

import SlideControls from './components/SlideControls';
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
  /**
   * currentSlideIndex를 기반으로 몇번째 카드인지 계산한 값
   * 예를 들어, 총 5개의 카드가 있고 currentSlideIndex가 6일 경우, 1번째 카드를 가리키는 값을 반환
   */
  const currentCardIndex = useMemo(() => {

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
      <SlideControls
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
