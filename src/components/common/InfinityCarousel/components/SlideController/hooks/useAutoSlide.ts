import { useEffect, useRef, useState } from 'react';

export interface UseAutoSlideProps {
  autoSlideInterval: number;
  moveToNextSlide: () => void;
}

export const useAutoSlide = ({ autoSlideInterval, moveToNextSlide }: UseAutoSlideProps) => {
  const [isAutoSlide, setIsAutoSlide] = useState(true);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const clearSlideInterval = () => {
    if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
  };

  const toggleAutoSlide = () => {
    setIsAutoSlide((prev) => !prev);
  };

  useEffect(() => {
    if (isAutoSlide) {
      slideIntervalRef.current = setInterval(moveToNextSlide, autoSlideInterval);
    }
    if (!isAutoSlide) {
      clearSlideInterval();
    }

    return clearSlideInterval;
  }, [isAutoSlide, moveToNextSlide, autoSlideInterval]);

  return {
    isAutoSlide,
    toggleAutoSlide,
    clearSlideInterval,
  };
};
