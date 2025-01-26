import { useEffect, useRef, useState } from 'react';

export interface UseAutoSlideProps {
  autoSlideInterval: number;
  moveSlide: () => void;
}

export const useAutoSlide = ({ autoSlideInterval, moveSlide }: UseAutoSlideProps) => {
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
      slideIntervalRef.current = setInterval(moveSlide, autoSlideInterval);
    }
    if (!isAutoSlide) {
      clearSlideInterval();
    }

    return clearSlideInterval;
  }, [isAutoSlide, moveSlide, autoSlideInterval]);

  return {
    isAutoSlide,
    toggleAutoSlide,
    clearSlideInterval,
  };
};
