import { useState } from 'react';

interface UseSlideTransitionProps {
  slidesLength: number;
  autoSlideDuration: number;
  manualSlideDuration: number;

  moveToIndexSlide: (index: number) => void;
}

const useSlideTransition = ({
  slidesLength,
  autoSlideDuration,
  manualSlideDuration,
  moveToIndexSlide,
}: UseSlideTransitionProps) => {
  const resetTransitionTime = manualSlideDuration * 0.7;

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideTransitionDuration, setSlideTransitionDuration] = useState(autoSlideDuration);
  const [isAbleControlSlide, setIsAbleControlSlide] = useState(true);

  const activateTransition = () => {
    setIsTransitioning(true);
  };

  const adjustTransitionToManualDuration = () => {
    setSlideTransitionDuration(manualSlideDuration);
  };

  const adjustTransitionToAutoDuration = () => {
    setSlideTransitionDuration(autoSlideDuration);
  };

  const resetTransition = (newIndex: number) => {
    setIsTransitioning(false);
    moveToIndexSlide(newIndex);
    // DOM 업데이트를 위한 최소한의 지연 시간
    setTimeout(() => {
      setIsTransitioning(true);
      setIsAbleControlSlide(true);
    }, resetTransitionTime);
  };

  const handleSlideTransitionEnd = (currentSlideIndex: number) => {
    // controlSlide button으로 슬라이드 조작 후 자동 슬라이드 속도 맞춤
    adjustTransitionToAutoDuration();
    if (currentSlideIndex === 0) {
      return resetTransition(slidesLength - 2);
    }
    if (currentSlideIndex === slidesLength - 1) {
      return resetTransition(1);
    }
    setIsAbleControlSlide(true);
  };

  const handleTransitionRun = () => {
    setIsAbleControlSlide(false);
  };

  return {
    isTransitioning,
    slideTransitionDuration,
    isAbleControlSlide,
    activateTransition,
    adjustTransitionToManualDuration,
    adjustTransitionToAutoDuration,
    handleSlideTransitionEnd,
    handleTransitionRun,
  };
};

export default useSlideTransition;
