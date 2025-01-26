'use client';

import React, { useState } from 'react';

import SlideController from './components/SlideController';
import SlideDisplay from './components/SlideDisplay';
import useCardWidth from './hooks/useCardWidth';
import { useSlideIndex } from './hooks/useSlideIndex';
import styles from './index.module.scss';

interface InfinityCarouselProps {
  title: string;
  autoSlideDuration?: number;
  autoSlideInterval?: number;
  contorlSlideDuration?: number;
  Duration?: number;
  children: React.ReactElement<HTMLElement>[];
}
const InfinityCarousel = ({
  title,
  autoSlideDuration = 1.5 * 1000,
  autoSlideInterval = 5 * 1000,
  contorlSlideDuration = 500,
  children: cards,
}: InfinityCarouselProps) => {
  const resetTransitionTime = contorlSlideDuration * 0.7;
  const slides = [cards[cards.length - 1], ...cards, cards[0]];

  const { currentSlideIndex, moveToNextSlide, moveToPrevSlide, moveToIndexSlide } = useSlideIndex({
    slidesLength: slides.length,
  });

  const { cardWidth, cardRef } = useCardWidth({
    activateTransition: () => setIsTransitioning(true),
  });

  const [slideTransitionDuration, setSlideTransitionDuration] = useState(autoSlideDuration);

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAbleControlSlide, setIsAbleControlSlide] = useState(true);

  const resetTransition = (newIndex: number) => {
    setIsTransitioning(false);
    moveToIndexSlide(newIndex);
    // DOM 업데이트를 위한 최소한의 지연 시간
    setTimeout(() => {
      setIsTransitioning(true);
      setIsAbleControlSlide(true);
    }, resetTransitionTime);
  };

  const handleSlideTransitionEnd = () => {
    // controlSlide button으로 슬라이드 조작 후 자동 슬라이드 속도 맞춤
    setSlideTransitionDuration(autoSlideDuration);
    if (currentSlideIndex === 0) {
      return resetTransition(slides.length - 2);
    }
    if (currentSlideIndex === slides.length - 1) {
      return resetTransition(1);
    }
    setIsAbleControlSlide(true);
  };

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
        setIsAbleControlSlide={setIsAbleControlSlide}
      />
      <SlideController
        isAbleControlSlide={isAbleControlSlide}
        currentSlideIndex={currentSlideIndex}
        cardsLength={cards.length}
        adjustTransitionToManualSpeed={() => {
          setSlideTransitionDuration(contorlSlideDuration);
        }}
        autoSlideInterval={autoSlideInterval}
        moveToNextSlide={moveToNextSlide}
        moveToPrevSlide={moveToPrevSlide}
      />
    </section>
  );
};

export default InfinityCarousel;
