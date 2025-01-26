import React from 'react';

import styles from './index.module.scss';

interface SlideDisplayProps {
  title: string;
  cardRef: React.RefObject<HTMLLIElement | null>;
  slides: React.ReactNode[];
  cardWidth: number;
  currentSlideIndex: number;
  isTransitioning: boolean;
  slideTransitionDuration: number;
  handleSlideTransitionEnd: () => void;
  setIsAbleControlSlide: (value: boolean) => void;
}

const SlideDisplay = ({
  title,
  cardRef,
  slides,
  cardWidth,
  currentSlideIndex,
  isTransitioning,
  slideTransitionDuration,
  handleSlideTransitionEnd,
  setIsAbleControlSlide,
}: SlideDisplayProps) => {
  return (
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
  );
};

export default SlideDisplay;
