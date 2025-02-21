'use client';

import { useRef } from 'react';

import Progressbar from './components/Progressbar';
import { useScrollProgress, useSwipeMouse, useSwipeTouch } from './hooks';
import styles from './index.module.scss';

interface SwipeableCarouselProps {
  children: React.ReactNode;
}

const SwipeableCarousel = ({ children }: SwipeableCarouselProps) => {
  const containerRef = useRef<HTMLUListElement>(null);

  const { handleMouseDown, handleMouseMove, handleMouseUp, handleMouseLeave } = useSwipeMouse({
    containerRef,
  });

  const { handleTouchStart, handleTouchMove } = useSwipeTouch({
    containerRef,
  });

  const { scrollProgress, handleScroll } = useScrollProgress({ containerRef });

  // 🎯 키보드 네비게이션 지원
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!containerRef.current) return;

    if (e.key === 'ArrowLeft') {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    } else if (e.key === 'ArrowRight') {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.carousel}>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <ul
        ref={containerRef}
        className={styles.carouselTrack}
        //eslint-disable-next-line
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onScroll={handleScroll}
      >
        {children}
      </ul>
      <Progressbar scrollProgress={scrollProgress} />
    </div>
  );
};

export default SwipeableCarousel;
