import Image from 'next/image';
import React from 'react';

import ArrowLeftIcon from '@/images/arrowLeft.svg';
import ArrowRightIcon from '@/images/arrowRight.svg';

interface SlideNavigationButtonProps {
  isPrev?: boolean;
  disabled: boolean;
  handleNavigationClick: (isPrev: boolean) => void;
}

const SlideNavigationButton = ({ isPrev = false, disabled, handleNavigationClick }: SlideNavigationButtonProps) => {
  return (
    <button disabled={disabled} onClick={() => handleNavigationClick(isPrev)}>
      <Image src={isPrev ? ArrowLeftIcon : ArrowRightIcon} width={18} alt="" />
    </button>
  );
};

export interface SlideNavigationProps extends Pick<SlideNavigationButtonProps, 'handleNavigationClick'> {
  isAbleControlSlide: boolean;
  currentSlideIndex: number;
  cards: React.ReactNode[];
}

const SlideNavigation = ({
  isAbleControlSlide,
  currentSlideIndex,
  cards,
  handleNavigationClick,
}: SlideNavigationProps) => {
  return (
    <div className={styles.slideNavigation}>
      <SlideNavigationButton
        disabled={!isAbleControlSlide}
        isPrev={true}
        handleNavigationClick={handleNavigationClick}
      />
      <div>
        {currentSlideIndex + 1} / {cards.length}
      </div>
      <SlideNavigationButton disabled={!isAbleControlSlide} handleNavigationClick={handleNavigationClick} />
    </div>
  );
};

export default SlideNavigation;
