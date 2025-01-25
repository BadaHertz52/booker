'use client';
import Image from 'next/image';
import React, { CSSProperties, useEffect, useRef, useState } from 'react';

import ArrowRightIcon from '@/images/arrowRight.svg';
import PauseIcon from '@/images/pauseCircle.svg';
import PlayIcon from '@/images/play.svg';
import { debounce } from '@/utils/debounce';

import styles from './index.module.scss';

interface SlideNavigationButtonProps {
  isPrev?: boolean;
  handleNavigationClick: (isPrev: boolean) => void;
}
const SlideNavigationButton = ({ isPrev = false, handleNavigationClick }: SlideNavigationButtonProps) => {
  return (
    <button onClick={() => handleNavigationClick(isPrev)}>
      <Image src={ArrowRightIcon} width={18} style={isPrev ? { transform: 'rotate(180deg)' } : {}} alt="" />
    </button>
  );
};
interface AutoPlayButtonProps {
  isPlaying: boolean;
  handlePlayButtonClick: () => void;
}

const AutoPlayButton = ({ isPlaying, handlePlayButtonClick }: AutoPlayButtonProps) => {
  return (
    <button onClick={handlePlayButtonClick}>
      <Image src={isPlaying ? PauseIcon : PlayIcon} width={18} alt="" />
    </button>
  );
};

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
  const slides = [cards[cards.length - 1], ...cards, cards[0]];
  type Direction = 'left' | 'right';
  const [currentSlideIndex, setCurrentIndex] = useState(1);
  const [slideTransitionDuration, setSlideTransitionDuration] = useState(autoSlideDuration);
  const [cardWidth, setCardWidth] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoSlide, setIsAutoSlide] = useState(true);

  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null); // useRef로 변경

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

  const handleNavigationClick = debounce((isPrev: boolean) => {
    moveSlide(isPrev ? 'left' : 'right');
  }, 100);

  const clearSlideInterval = () => {
    if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
  };

  useEffect(() => {
    if (isAutoSlide) {
      slideIntervalRef.current = setInterval(() => {
        moveSlide('right');
      }, autoSlideInterval);
      setSlideTransitionDuration(autoSlideDuration);
    }
    if (!isAutoSlide) {
      setSlideTransitionDuration(contorlSlideDuration);
      clearSlideInterval();
    }

    return () => {
      clearSlideInterval();
    };
  }, [isAutoSlide]);

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
    }, 10);
  };

  const handleSlideTransitionEnd = () => {
    if (currentSlideIndex === 0) {
      return resetTransition(slides.length - 2);
    }
    if (currentSlideIndex === slides.length - 1) {
      return resetTransition(1);
    }
  };

  return (
    <section className={styles.container} style={{ width: cardWidth, overflow: 'hidden' }}>
      <ul
        onTransitionEnd={handleSlideTransitionEnd}
        className={styles.slide}
        style={{
          transform: `translateX(-${cardWidth * currentSlideIndex}px)`,
          transition: isTransitioning ? `transform ${slideTransitionDuration}ms ease-in-out` : 'none',
        }}
      >
        {slides.map((card, index) => (
          <li ref={cardRef} key={`card-${index}`}>
            {card}
          </li>
        ))}
      </ul>
      <div className={styles.slideNavigation}>
        <SlideNavigationButton isPrev={true} handleNavigationClick={handleNavigationClick} />
        <div>
          {currentSlideIndex + 1} / {cards.length}
        </div>
        <SlideNavigationButton handleNavigationClick={handleNavigationClick} />
      </div>
      <AutoPlayButton
        isPlaying={isAutoSlide}
        handlePlayButtonClick={() => {
          setIsAutoSlide((prev) => !prev);
        }}
      />
    </section>
  );
};

export default InfinityCarousel;
