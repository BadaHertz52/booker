'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

import ArrowRightIcon from '@/images/arrowRight.svg';
import PauseIcon from '@/images/pauseCircle.svg';
import PlayIcon from '@/images/play.svg';
import { debounce } from '@/utils/debounce';

import styles from './index.module.scss';

interface SlideNavigationButtonProps {
  isPrev?: boolean;
  disabled: boolean;
  handleNavigationClick: (isPrev: boolean) => void;
}
const SlideNavigationButton = ({ isPrev = false, disabled, handleNavigationClick }: SlideNavigationButtonProps) => {
  return (
    <button disabled={disabled} onClick={() => handleNavigationClick(isPrev)}>
      <Image src={ArrowRightIcon} width={18} style={isPrev ? { transform: 'rotate(180deg)' } : {}} alt="" />
    </button>
  );
};
interface AutoPlayButtonProps {
  isPlaying: boolean;
  disabled: boolean;
  handlePlayButtonClick: () => void;
}

const AutoPlayButton = ({ isPlaying, disabled, handlePlayButtonClick }: AutoPlayButtonProps) => {
  return (
    <button onClick={handlePlayButtonClick} disabled={disabled}>
      <Image src={isPlaying ? PauseIcon : PlayIcon} width={18} alt="" />
    </button>
  );
};

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
    // controlSlide buttond으로 슬라이드 조작 후 자동 슬라이드 속도 맞춤
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
      <ul
        onTransitionEnd={handleSlideTransitionEnd}
        onTransitionRun={() => setIsAbleControlSlide(false)}
        className={styles.slide}
        style={{
          transform: `translateX(-${cardWidth * currentSlideIndex}px)`,
          transition: isTransitioning ? `transform ${slideTransitionDuration}ms ease-in-out` : 'none',
        }}
      >
        {slides.map((card, index) => (
          <li ref={cardRef} key={`${title}card-${index}`}>
            {card}
          </li>
        ))}
      </ul>
      <div className={styles.slideNavigation}>
        <SlideNavigationButton
          disabled={!isAbleControlSlide}
          isPrev={true}
          handleNavigationClick={handleNavigationClick}
        />
        <div>
          {currentSlideIndex + 1} / {cards.length}
        </div>
        <SlideNavigationButton disabled={!isAbleControlSlide} handleNavigationClick={handleNavigationClick} />
      </div>
      <AutoPlayButton
        disabled={!isAbleControlSlide}
        isPlaying={isAutoSlide}
        handlePlayButtonClick={() => {
          setIsAutoSlide((prev) => !prev);
        }}
      />
    </section>
  );
};

export default InfinityCarousel;
