import { useState } from 'react';

interface UseSwipeTouchProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const useSwipeTouch = ({ containerRef }: UseSwipeTouchProps) => {
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

  return {
    handleTouchStart,
    handleTouchMove,
  };
};

export default useSwipeTouch;
