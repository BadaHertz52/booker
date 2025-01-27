import { useEffect, useRef, useState } from 'react';

interface UseCardWidthProps {
  activateTransition: () => void;
}
const useCardWidth = ({ activateTransition }: UseCardWidthProps) => {
  const [cardWidth, setCardWidth] = useState(0);

  const cardRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.clientWidth);

      requestAnimationFrame(() => {
        activateTransition();
      });
    }
  }, [cardRef.current]);

  return {
    cardWidth,
    cardRef,
  };
};
export default useCardWidth;
