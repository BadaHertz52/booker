import classNames from 'classnames';
import React from 'react';

import styles from './index.module.scss';

interface SlideDisplayProps {
  title: string;
  cardRef: React.RefObject<HTMLLIElement | null>;
  slides: React.ReactElement<React.HTMLAttributes<HTMLElement>>[];
  cardWidth: number;
  currentSlideIndex: number;
  isTransitioning: boolean;
  slideTransitionDuration: number;
  handleSlideTransitionEnd: (currentSlideIndex: number) => void;
  handleTransitionRun: () => void;
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
  handleTransitionRun,
}: SlideDisplayProps) => {
  return (
    <ul
      onTransitionEnd={() => handleSlideTransitionEnd(currentSlideIndex)}
      onTransitionRun={handleTransitionRun}
      className={styles.slide}
      style={{
        transform: `translateX(-${cardWidth * currentSlideIndex}px)`,
        transition: isTransitioning ? `transform ${slideTransitionDuration}ms ease-in-out` : 'none',
      }}
    >
      {slides.map((card, index) => (
        <li
          ref={cardRef}
          key={`${title}card-${index}`}
          className={classNames(styles.card, { [styles.inactive]: currentSlideIndex !== index })}
        >
          {React.cloneElement(card, {
            'aria-hidden': currentSlideIndex !== index,
            tabIndex: currentSlideIndex === index ? 0 : -1,
          } as any)}
        </li>
      ))}
    </ul>
  );
};

export default SlideDisplay;
