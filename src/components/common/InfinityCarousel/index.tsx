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
  duration?: number;
  children: React.ReactElement<HTMLElement>[];
}
const InfinityCarousel = ({ title, duration = 1000, children: cards }: InfinityCarouselProps) => {
  const slides = [cards[cards.length - 1], ...cards, cards[0]];
  type Direction = 'left' | 'right';
  const [currentSlideIndex, setCurrentIndex] = useState(1);
  const [cardWidth, setCardWidth] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const cardRef = useRef<HTMLLIElement>(null);

  const getPrevIndex = (currentSlideIndex: number) => {
    return (currentSlideIndex - 1 + slides.length) % slides.length;
  };

  const getNextIndex = (currentSlideIndex: number) => {
    return (currentSlideIndex + 1) % slides.length;
  };

  const moveSlide = (direction: Direction) => {
    const newCurrentIndex = direction === 'left' ? getPrevIndex(currentSlideIndex) : getNextIndex(currentSlideIndex);

    setCurrentIndex(newCurrentIndex);
  };

  const handleNavigationClick = debounce((isPrev: boolean) => {
    moveSlide(isPrev ? 'left' : 'right');
  }, 100);

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.clientWidth);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 100);
    }
  }, [cardRef.current]);

  const handleSlideTransitionEnd = () => {
    if (currentSlideIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(slides.length - 2);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 10);
      return;
    }
    if (currentSlideIndex === slides.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 10);
      return;
    }
    setIsTransitioning(true);
  };

  return (
    <section className={styles.container} style={{ width: cardWidth, overflow: 'hidden' }}>
      <ul
        onTransitionEnd={handleSlideTransitionEnd}
        className={styles.slide}
        style={{
          transform: `translateX(-${cardWidth * currentSlideIndex}px)`,
          transition: isTransitioning ? `transform ${duration}ms ease-in-out` : 'none',
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
      <AutoPlayButton isPlaying={false} handlePlayButtonClick={() => {}} />
    </section>
  );
};

export default InfinityCarousel;
