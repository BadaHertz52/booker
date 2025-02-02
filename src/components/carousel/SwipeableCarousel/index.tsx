'use client';

import { useRef, useState } from 'react';

import styles from './index.module.scss';

interface SwipeableCarouselProps {
  children: React.ReactNode;
}

const SwipeableCarousel = ({ children }: SwipeableCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // 🖱️ 마우스 드래그 이벤트
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // 드래그 속도 조절
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // 📱 터치 이벤트 (모바일 대응)
  const [startTouchX, setStartTouchX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    setStartTouchX(e.touches[0].pageX);
    setStartScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const touchX = e.touches[0].pageX;
    const walk = (touchX - startTouchX) * 2; // 터치 드래그 속도 조절
    containerRef.current.scrollLeft = startScrollLeft - walk;
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setScrollProgress(scrollLeft / (scrollWidth - clientWidth));
  };

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
      <div
        ref={containerRef}
        className={styles.carouselTrack}
        role="region"
        aria-label="Swipeable image carousel"
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
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressIndicator} style={{ width: `${scrollProgress * 100}%` }} />
      </div>
    </div>
  );
};

export default SwipeableCarousel;
