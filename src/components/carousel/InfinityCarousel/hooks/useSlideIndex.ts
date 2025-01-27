import { useState } from 'react';

interface UseSlideIndexProps {
  slidesLength: number;
}

export const useSlideIndex = ({ slidesLength }: UseSlideIndexProps) => {
  const [currentSlideIndex, setCurrentIndex] = useState(1);

  const moveToNextSlide = () => {
    setCurrentIndex((current) => (current + 1) % slidesLength);
  };

  const moveToPrevSlide = () => {
    setCurrentIndex((current) => (current - 1 + slidesLength) % slidesLength);
  };

  const moveToIndexSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return {
    currentSlideIndex,
    moveToNextSlide,
    moveToPrevSlide,
    moveToIndexSlide,
  };
};
