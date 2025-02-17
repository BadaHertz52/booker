import { useEffect, useRef, useState } from 'react';

export interface UseAutoSlideProps {
  isFocused: boolean;
  autoSlideInterval: number;
  moveToNextSlide: () => void;
}

export const useAutoSlide = ({ isFocused, autoSlideInterval, moveToNextSlide }: UseAutoSlideProps) => {
  const [isAutoSlide, setIsAutoSlide] = useState(true);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const clearSlideInterval = () => {
    if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
  };

  const toggleAutoSlide = () => {
    setIsAutoSlide((prev) => !prev);
  };

  useEffect(() => {
    setIsAutoSlide(!isFocused);
  }, [isFocused]);

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
