import { useState } from 'react';

interface UseScrollProgressProps {
  containerRef: React.RefObject<HTMLUListElement | null>;
}

const useScrollProgress = ({ containerRef }: UseScrollProgressProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setScrollProgress(scrollLeft / (scrollWidth - clientWidth));
  };

  return {
    scrollProgress,
    handleScroll,
  };
};

export default useScrollProgress;
