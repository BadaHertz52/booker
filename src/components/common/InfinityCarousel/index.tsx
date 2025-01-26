'use client';

import React, { useEffect, useRef, useState } from 'react';

import SlideController from './components/SlideController';
import SlideDisplay from './components/SlideDisplay';
import styles from './index.module.scss';

type Direction = 'left' | 'right';
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

  const [currentSlideIndex, setCurrentIndex] = useState(1);
  const [slideTransitionDuration, setSlideTransitionDuration] = useState(autoSlideDuration);
  const [cardWidth, setCardWidth] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoSlide, setIsAutoSlide] = useState(true);
  const [isAbleControlSlide, setIsAbleControlSlide] = useState(true);

  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const cardRef = useRef<HTMLLIElement>(null);

  const getPrevIndex = (currentSlideIndex: number) => {
    return (currentSlideIndex - 1 + slides.length) % slides.length;
  };

  const getNextIndex = (currentSlideIndex: number) => {
    return (currentSlideIndex + 1) % slides.length;
  };

  const moveSlide = (direction: Direction) => {
    setCurrentIndex((prev) => (direction === 'left' ? getPrevIndex(prev) : getNextIndex(prev)));
  };

  const handleNavigationClick = (isPrev: boolean) => {
    setSlideTransitionDuration(contorlSlideDuration);
    clearSlideInterval();
    moveSlide(isPrev ? 'left' : 'right');
  };

  const clearSlideInterval = () => {
    if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
  };

  useEffect(() => {
    if (isAutoSlide) {
      slideIntervalRef.current = setInterval(() => {
        moveSlide('right');
      }, autoSlideInterval);
    }
    if (!isAutoSlide) {
      clearSlideInterval();
    }

    return () => {
      clearSlideInterval();
    };
  }, [isAutoSlide, currentSlideIndex]);

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.clientWidth);

      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    }
  }, [cardRef.current]);

  const resetTransition = (newIndex: number) => {
    setIsTransitioning(false);
    setCurrentIndex(newIndex);
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

  const handlePlayButtonClick = () => {
    setIsAutoSlide((prev) => !prev);
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
        cards={cards}
        handleNavigationClick={handleNavigationClick}
        handlePlayButtonClick={handlePlayButtonClick}
        isPlaying={isAutoSlide}
      />
    </section>
  );
};

export default InfinityCarousel;
